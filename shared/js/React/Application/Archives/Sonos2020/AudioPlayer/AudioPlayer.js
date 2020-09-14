import React , { useState,useEffect,useRef,createRef, useMemo }from 'react';

import ReactHowler from 'react-howler'

// Icons
//import AudioIcon from "../untilities/svg/audioicon"
import AudioPlay from "../untilities/svg/audioPlay"
import AudioPause from "../untilities/svg/audioPause"
import StopIcon from '@material-ui/icons/Stop';
import Replay5Icon from '@material-ui/icons/Replay5';
import Forward5Icon from '@material-ui/icons/Forward5';
import AppsIcon from '@material-ui/icons/Apps';

const AudioPlayer = (props)=>{
    const {Audio, forwardedRef} = props
    
    const [AudioState, setAudioState] = useState(false) 

    const [StageState, setStageState] = useState({
        state:{
            AudioReady:false,
            Loading:<AudioReadyLoader AudioReady={false} />
        }
   })
      

    const _OnLoad= ()=>{
        console.log( "_OnLoad");
        setStageState({...StageState, state:{
            AudioReady:true,
            Loading:  <Controls {... props} setAudioState={setAudioState}/>
        }})
    }

    useEffect(()=>{
     console.log("AudioPlayer Check AudioState", AudioState)   
    },[StageState, AudioState])



    return(

        <div className="Audio">
                    <ReactHowler 
                        src={Audio} 
                        ref={ el=>{forwardedRef.AudioRef=el}} 
                        onLoad={_OnLoad} 
                        html5={true}
                        playing={AudioState}
                    />

                    {StageState.state.Loading}
        </div>
    )
}

export default AudioPlayer;


const AudioReadyLoader = ({AudioReady})=>{
    if(AudioReady) return true;
    return(  <div className="AudioLoadSplitter"><div className="lds-ripple"><div></div><div></div></div></div>)
}


const Controls = (props)=>{

    const {Audio, forwardedRef,setAudioState} = props;
  
    const [ControlState, setControlState] = useState(false)
    const BtnPlay = <AudioPlay className="Play" />;
    const BtnPause = <AudioPause className="Pause" />;

    const [Btn, setBtn] = useState(BtnPlay)



    // Functions
    const PlaySequence = ()=>{
            console.log("Play Sequence Clicked", ControlState)
        //    props.PlaySequence()
            setBtn(BtnPause)
            forwardedRef.AudioRef.play()
            setAudioState(true)
            setControlState(true)
    }

const PauseSequence = ()=>{ 
            
    console.log("Pause Sequence Clicked", ControlState)

    //props.PauseSequence()
    forwardedRef.AudioRef.stop()
    setBtn(BtnPlay)
    setAudioState(false)
    setControlState(false)

}

const StopSequence = ()=>{
    //props.StopSequence()
    forwardedRef.AudioRef.stop()
    setBtn(BtnPlay)
    setAudioState(false)
    setControlState(false)
}

useEffect(()=>{
    // forwardedRef.AudioRef
   console.log("AudioState Check in Controls",  ControlState)   
},[setAudioState])

    return(
        <div className="Player">

            <div ref={el=>{ forwardedRef.AudioControls = el}} className="controls"> 
                    <button className="small" onClick={()=>{StopSequence}} ref={ el=>{forwardedRef.StopAudio=el}}  ><StopIcon className="small stop" /> </button>
                    <button   className="small" onClick={()=>{ ControlState ? PauseSequence():PlaySequence()}}> 
                        {Btn} 
                    </button>
            </div>
        </div>
    )
}


/*

   {forwardedRef.AudioRef.currentTime}
<audio  
                ref={ el=>{forwardedRef.AudioRef=el}} 
                src={Audio} 
            > 
                    <code>audio</code> element. 
            </audio>

*/

/**
 * 
 *  <button className="small" onClick={()=>{props.alterTime(false)}} ref={el=>{forwardedRef.back5=el}}><Replay5Icon className="small Replay5Icon" /> </button>
                    
                    <button className="small" onClick={()=>{props.SessionKill(true)}}  ref={ el=>{forwardedRef.SessionKill=el}} ><AppsIcon className=" AppsIcon" /> </button>
                    
                    <button className="small" onClick={()=>{props.alterTime(true)}}  ref={ el=>{forwardedRef.forward5=el}} ><Forward5Icon className=" Forward5Icon" /> </button>
 */