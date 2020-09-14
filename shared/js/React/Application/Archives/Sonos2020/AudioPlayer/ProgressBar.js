import React , { useState,useEffect,useRef,createRef, useMemo }from 'react';
import {gsap} from 'gsap'

const ProgressBar = (props)=>{
    const {Audio} = props;

    const [progress, setProgress] = useState(0)

    const ProgressTicker = ()=>{
   
        if(Audio.AudioRef === null){
            gsap.ticker.remove(ProgressTicker);
        }
        else{

            setProgress((Audio.AudioRef.seek()/Audio.AudioRef.duration())*100)
        }
        
    }
    useEffect(()=>{
        gsap.ticker.add(ProgressTicker);
    })

    return(
        <div className="ProgressBarOuter" >
            <div className="ProgressBar" style={ {width: `${progress}%`}} ></div>
        </div>
    )
}

export default ProgressBar;