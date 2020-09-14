import React, { useEffect, useState } from 'react'
import { useSelector,useDispatch } from "react-redux";


const RESPONSE =(props)=>{
    const APP = useSelector(state => state.APP);
    const [AnsweredLabel, setAnsweredLabel] = useState(APP.AnsweredLabel)
    useEffect(()=>{
           //console.log("RESPONSE", props.Response[0].Copy)
    })

    if(props.State !== null){
    return(
            <div className="AnswerResponse">
                <img src={`<%= path %>/images/${props.Response[0].image}`}/>
                <p>{props.Response[0].Copy}</p>
            </div>
        )
    }else{
        return( <div></div>)
    }
}
export default RESPONSE