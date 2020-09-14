import React, { useEffect, useState } from 'react'
import { useSelector,useDispatch } from "react-redux";


const Question =(props)=>{

    const APP = useSelector(state => state.APP);
    const [AnsweredTally, setAnswers] = useState(APP.AnsweredTally)
    //const [AnsweredLabel, setAnsweredLabel] = useState(APP.AnsweredLabel)
    const [Selected, setSelected] = useState("closed")
    const [opacity, setopacity] = useState("full")
    const [disable, setDisable] = useState(false)

    
    const dispatch = useDispatch()

    const BtnState = ()=>{
        
       
        if(AnsweredTally[props.QuestionInt] !== null){
            //console.log("BtnState ANSWERED : ",props.Answer.Result, AnsweredTally[props.QuestionInt],props.Answer.Label)
            
            switch (props.Answer.Result) {
                case true:
                    setSelected("correct")
                    setopacity("full")
                    setDisable(true)
                  break;
                case false:
                    setSelected("incorrect")
                    setopacity("slight")
                    setDisable(true)
                  break;
               
              }


            if(props.Answer.Result === AnsweredTally[props.QuestionInt]){
               // setopacity("full")
            }
            else{
               // setopacity("slight")
            }
        }


    }
    const onClick=()=>{

        //console.log("props.Answer.Result", props.Answer.Result)
        //console.log("AnsweredTally 1", AnsweredTally, props.Answer.Result)
            
            
        AnsweredTally[props.QuestionInt] = props.Answer.Result;
       // APP.AnsweredTally[props.QuestionInt] = props.Answer.Result;
        
        
        //setAnswers(AnsweredTally);
        //setAnsweredLabel(AnsweredLabel) 
        // STORE_USERSANSWERS
        
        //console.log("AnsweredTally", AnsweredTally, props.Answer.Result)
        dispatch({ type: 'STORE_ANSWERED', payload:AnsweredTally })
        //dispatch({ type: 'STORE_USERSANSWERS', payload:AnsweredLabel })

       
           
    }

    useEffect(()=>{
       BtnState();
       //console.log("ANSWER", props.QuestionInt, props.Answer)
    },[props])
    return(
        <button onClick={onClick} className={`Answer ${Selected} ${opacity}`} disabled={disable} > 
                <h1>{props.Answer.Label}</h1>
        </button>
        )
}
export default Question