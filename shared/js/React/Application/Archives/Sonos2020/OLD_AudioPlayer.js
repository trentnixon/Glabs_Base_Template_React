import React , { useState,useEffect,useRef,createRef, useMemo }from 'react';

// Icons
//import AudioIcon from "../untilities/svg/audioicon"
/*
import AudioPlay from "../untilities/svg/audioPlay"
import AudioPause from "../untilities/svg/audioPause"
import StopIcon from '@material-ui/icons/Stop';
import Replay5Icon from '@material-ui/icons/Replay5';
import Forward5Icon from '@material-ui/icons/Forward5';
import AppsIcon from '@material-ui/icons/Apps';
*/

const AudioPlayer = (props)=>{
    const {Audio, forwardedRef} = props
    
    //const BtnPlay = <AudioPlay className="Play" />;
    //const BtnPause = <AudioPause className="Pause" />;
    
    const [StageState, setStageState] = useState({
        state:{
            Paused:true,
           // Button:BtnPlay
        }
   })
      // Functions
      const PlaySequence = ()=>{
            
        props.PlaySequence()

            // Update StateObject
            setStageState({...StageState, state:{
                Paused:false,
                Button:BtnPause
            }})
    }

    const PauseSequence = ()=>{
            
            props.PauseSequence()
            
            // Update StateObject
            
            setStageState({...StageState, state:{
                Paused:true,
                Button:BtnPlay
            }})
    }
 
    useEffect(()=>{
        console.log("AudioPlayer Check",  forwardedRef.AudioRef.currentTime, forwardedRef.AudioRef.ended)   
    },[forwardedRef.AudioRef])
    return(
        <div className="Audio" ref={el=>{ forwardedRef.AudioButton = el}}> 
        <div className="Player">
            <audio  ref={ el=>{forwardedRef.AudioRef=el}} src={Audio} > <code>audio</code> element. </audio>
        </div>
    </div>
    )
}

export default AudioPlayer;

/*

 <div ref={el=>{ forwardedRef.AudioControls = el}} className="controls"> 
                    <button className="small" onClick={()=>{props.alterTime(false)}} ref={el=>{forwardedRef.back5=el}}><Replay5Icon className="small Replay5Icon" /> </button>
                    <button className="small" onClick={()=>{props.StopSequence()}} ref={ el=>{forwardedRef.StopAudio=el}}  ><StopIcon className="small stop" /> </button>
                    <button onClick={()=>{ forwardedRef.AudioRef.paused ? PlaySequence():PauseSequence();}}> 
                        {StageState.state.Button} 
                    </button> 
                    <button className="small" onClick={()=>{props.SessionKill(true)}}  ref={ el=>{forwardedRef.SessionKill=el}} ><AppsIcon className=" AppsIcon" /> </button>
                    
                    <button className="small" onClick={()=>{props.alterTime(true)}}  ref={ el=>{forwardedRef.forward5=el}} ><Forward5Icon className=" Forward5Icon" /> </button>
            </div>

*/