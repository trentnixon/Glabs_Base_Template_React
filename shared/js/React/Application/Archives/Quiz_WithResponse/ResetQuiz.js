import React, { useEffect, useState } from 'react'
import { useSelector,useDispatch } from "react-redux";

const RESET =(props)=>{
    const APP = useSelector(state => state.APP);
    const dispatch = useDispatch()      

    useEffect(()=>{})
    const OnClick = ()=>{
        let ARR=[]
        APP.Quiz.map((q,i)=>{ ARR.push(null)})
        dispatch({ type: 'STORE_USERSANSWERS', payload:ARR })
        dispatch({ type: 'STORE_ANSWERED', payload:ARR})
                
    }
    return(
            <div>
                <button onClick={OnClick}>Reset Quiz</button>
            </div>
        )
}
export default RESET