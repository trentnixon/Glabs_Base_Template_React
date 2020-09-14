import React, { useEffect, useState } from 'react'
import {  useSelector } from "react-redux";
// useDispatch,

// Import Stateless
import MeasureH1 from "shared/js/React/Application/DebtCalculator/js/Stateless/H1"
import MeasureCopy from "shared/js/React/Application/DebtCalculator/js/Stateless/P"
import MeasureSource from "shared/js/React/Application/DebtCalculator/js/Stateless/Source"

// Import Actions
import { handleClick } from "shared/js/React/Application/DebtCalculator/actions/handle";
import {kFormatter} from "shared/js/React/Application/DebtCalculator/actions/actions"

var _ = require('lodash');


const Measures =()=>{
    const APP = useSelector(state => state.APP);
    const [count, setCount] = useState(1)
    
    // Section Params
    // 
        // - Section Title, 
        // - Section Data, 
        // - Reducuer APPLICATION Type,  Updates Data Object
        // - $Value Redux Type for Value Update, 
        // - Object Key to Update,
        
    const Block=[
        {
            Title:`First, rule in some tax changes`,
            Data:APP.APPLICATION[0],           
        },
        {
            Title:`Then, spend some money`,
            Data:APP.APPLICATION[1],            
        }
    ]

    useEffect(()=>{ 
       setCount(count+1)
       //console.log("count the number of interations ", count)
    },[APP])
    return(
                Block.map((B,BlockI)=>{
       
                    return(
                        <div key={BlockI} className="MeasuresContainer">
                            
                                <h1 className="SectionTitle">{B.Title}</h1>
                                <div className="MeasuresContainer">
                                    {
                                        B.Data.map((Measure,i)=>{
                     
                                            return(
                                                <div key={i} className="Measures" >
                                                     <div className="Content">
                                                        <MeasureH1 Copy={Measure.title} /> 
                                                        <MeasureCopy Copy={Measure.description} />
                                                        <MeasureSource Copy={Measure.source} URL={Measure.sourcelink}/>
                                                    </div>
                                                   
                                                    <div className="Amount">
                                                        <p>${kFormatter(Measure.amount)}</p>
                                                        <Button  
                                                            Measure={Measure} 
                                                            int={i}
                                                            Block={B}
                                                            APP={APP}
                                                            BlockI={BlockI}
                                                        />
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                        </div>
                    )
                })     
    )
}

export default Measures;


const Button = (props)=>{

    // [LABEL,CLASS,GROUPSTATE]
    const [ButtonAttr, setAttr] = useState(["Rule In", "Open", false])

    // Set group avaliablility
    const setGroup =(Measure, Groups)=>{
        let Unavailable=false
        if(Measure.group.length>0){
            let Find =  _.findIndex(Groups, function(o) {  return o['key'] === Measure.group;  }) 
            Unavailable = Groups[Find].value
        }

        if(Measure.state){ setAttr(['Rule Out','Closed',false])}
        else{ 
            if(Unavailable){ setAttr(['Unavailable','Unavailable',true]) }
            else{  setAttr(['Rule In','Open',false]) }
        }
    }

    // Onclick
    //Handle = ArrPosition, Category
    const onClick=()=>{ handleClick(props.int, props.BlockI) } 
   
    useEffect(()=>{ setGroup(props.Measure, props.APP.Groups)},[props.Block])

    return(
        <button 
            onClick={onClick}
            className={ButtonAttr[1]} 
            disabled={ButtonAttr[2]} 
        >
            {ButtonAttr[0]}
        </button>
    )
}