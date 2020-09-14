import React, {useEffect, useState} from 'react';

import {Container} from "../../Structure/Structure";
import {H1, H2, P} from "../../Typography/Type"

import Home from "./Home";
import Scholars from "./Scholars"

import VideoHeader from "../../Core_Element/VideoHeader"

import {GA} from "../../actions/ga"

const Westpack = (props)=>{

    // To avoid using the reducer, lets keep it all in state

    // Component State
    const [Parent, setParent] = useState(false)
    const [SelectedScholars, setSelectedScholars] = useState([])
    // Stored Data
    const [useScholars, setuseScholars] = useState(props.APPLICATION[0])
    const [AssignedCategories, setAssigned] = useState(props.APPLICATION[1])
    const [useCategories, setuseCategories] = useState(props.APPLICATION[2])
    const [useMeta, setMeta] = useState(props.Meta)
    
    
    const ToggleParent = (ID, TITLE)=>{

        let Selected=[]

        window.scrollTo({ top: 0,behavior: 'smooth'});

        TITLE ? setParent(useCategories[ID]) : setParent(TITLE)

        AssignedCategories.map((s,i)=>{ if(parseInt(s[TITLE]) === 1){ Selected.push(s) } })

        setSelectedScholars(Selected)

        GA('Application Click','Category',TITLE)
    }
  

    useEffect(()=>{ },[])

    if(Parent === false){
        return(
            <div className="Westpack">

                <VideoHeader 
                    src="GettyImages-901353736_1.mp4" 
                    h1={useMeta[0][0].Header}
                    h2={useMeta[0][0].SubHeader}
                    useMeta={useMeta} 
                    svg={null}
                    className="Parent"
                />
                 
                <Home  
                    ToggleParent={ToggleParent} 
                    useMeta={useMeta} 
                    useCategories={useCategories}
                />

            </div>
        )
    }
    else{
        return(
            <div className="Westpack">
                    <VideoHeader 
                        className="Child"
                        src={Parent.Meta3}
                        useMeta={useMeta}
                        h1={Parent.Category}
                        h2={Parent.Meta1}
                        svg={Parent.Meta2}
                    />
                   <Container>
                        <button className="BackButton" onClick={()=>{ToggleParent(false, false)}}>Home</button>
                    </Container>
                
                    <Scholars useScholars={useScholars} SelectedScholars={SelectedScholars}/>
                    
            </div>
        )
    }
    
}

export default Westpack;
