import React, {useEffect, useState, useRef,createRef} from 'react';
import {gsap} from 'gsap'

const AudioProgressMeta = (props)=>{
    const {Audio} = props;

    const [progress, setProgress] = useState(0)
    const [duration, setDuration] = useState(0)
    const [current, setCurrent] = useState(0)

    const ProgressTicker = ()=>{
     
        
        if(Audio.AudioRef === null){ gsap.ticker.remove(ProgressTicker); }
        else{
           // console.log(!isNaN(parseInt(Audio.AudioRef.seek())))
            if(!isNaN(parseInt(Audio.AudioRef.seek()))){
               // console.log(Audio.AudioRef.seek(), Audio.AudioRef.duration())
                setProgress(((Audio.AudioRef.seek()/Audio.AudioRef.duration())*100).toFixed(1))
               // props.TrackAudioMeta(((Audio.AudioRef.seek()/Audio.AudioRef.duration())*100).toFixed(1))
                setCurrent((Audio.AudioRef.seek()).toFixed(1));
                setDuration((Audio.AudioRef.duration()).toFixed(1));
            }
           else{
             //  console.log("Not a Number", !isNaN(parseInt(Audio.AudioRef.seek())))
           }
        }
    }

    

    const GetDuration = (dur)=>{

        let Min = Math.floor(dur/ 60)

        let sec = (dur - Min * 60).toFixed(0);

        sec = ("0" + sec).slice(-2)
        Min = ("0" + Min).slice(-2)

        return `${Min} : ${sec}`

    }

    useEffect(()=>{
        gsap.ticker.add(ProgressTicker);
    })

    return(
        <div className="AudioMeta">
            <div className="AudioTime"><strong>{GetDuration(current)}</strong><strong>{GetDuration(duration)}</strong></div>
            
            
        </div>
    )
}
/*
<div>Migrated Time into Player on production release</div>
            <div> Gross Percentage Complete : <strong>{progress} %</strong></div>
            <div>Time code in Seconds : <strong>{current}/{duration}</strong></div>
*/
export default AudioProgressMeta;