import React, {useEffect, useState, useRef,createRef} from 'react';

import ReactHowler from 'react-howler'

// Actions
import {GA} from "../../actions/ga"
import {gsap} from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== `undefined`) {
    gsap.registerPlugin(ScrollTrigger)
    gsap.core.globals("ScrollTrigger", ScrollTrigger)
  }

// Icons
//import AudioIcon from "../untilities/svg/audioicon"
import AudioPlay from "./untilities/svg/audioPlay"
import AudioPause from "./untilities/svg/audioPause"
import StopIcon from '@material-ui/icons/Stop';

import Replay5Icon from '@material-ui/icons/Replay5';
import Forward5Icon from '@material-ui/icons/Forward5';
//import AppsIcon from '@material-ui/icons/Apps';

/*
import {Master_Stage1} from "./Tweens/AudioSequence"
import {Master_Reset} from "./Tweens/ResetSequence"
import {SideColorChange} from "./Tweens/SideColorChange"
import {SlideInOut, SlideInOutQuestion} from "./Tweens/SlideInSlideOut"
*/


// Structure
import {FullWidthContainer, Container} from "../../Structure/Structure";
import {H1, H2, P} from "../../Typography/Type"

// Components
import ProgressBar from "./AudioPlayer/ProgressBar";
import ProgressImageReveal from "./AudioPlayer/ProgressImageReveal";

import QuoteCards from "./QuoteAnimationCards";
import AudioCopy from "./AudioCopy";
import AudioReadyLoader from "./AudioReadyLoader"
import AudioProgressMeta from "./AudioProgressMeta";



//let Master = gsap.timeline({ paused: true  })

let Quotetl = gsap.timeline({ paused: true, });



const AnimatedAudio = (props)=>{

    // Consts
    const BtnPlay = <AudioPlay className="Play" />;
    const BtnPause = <AudioPause className="Pause" />;
    // Refs
    let Section1 = useRef(null);

    const RefAudioControls = {
            AudioRef:useRef(null),
            AudioButton:useRef(null),
            AudioControls:useRef(null),
            back5:useRef(null),
            forward5:useRef(null),
            StopAudio:useRef(null),
            SessionKill:useRef(null)
        }


    // UseState
    const [AudioPercentage, setAudioPercentage] = useState(0);
    const [AudioData,setAudioData] = useState(props.Player.Audio)  
    
    const [AudioReady, setAudioReady] = useState(false) 
    const [AudioDuration, setAudioDuration] = useState(false) 
    const [AudioState, setAudioState] = useState(false) 
    const [Btn, setBtn] = useState(BtnPlay)




    
    

      // Functions
      const PlaySequence = ()=>{

        // Add ticker
        //gsap.ticker.add(WatchTicker);

        // Play Audio and Sequence
        console.log("PLAY SEQUENCE", RefAudioControls.AudioRef.seek())


        // Play ALl
        
        //RefAudioControls.AudioRef.play()
        setAudioState(true);
        setBtn(BtnPause)
        
        // Timelines
        Quotetl.play()
        
        //Master.play()
    }




    const PauseSequence = ()=>{
        // Remove Ticker
        //gsap.ticker.remove(WatchTicker);
        // Pause Audio and Sequence
        console.log("PAUSE SEQUENCE")
        
        // Pause All
        //Master.pause()
        Quotetl.pause()



        setAudioState(false)
        //setAudioReady(false)
        setBtn(BtnPlay)
        //SyncTimelines()
    }


    
    const StopSequence = ()=>{
        console.log("STOP and RESTART SEQUENCE",  RefAudioControls.AudioRef)
    
        PauseSequence()
        
        setBtn(BtnPlay)

        Quotetl.pause().progress(0)
        RefAudioControls.AudioRef.seek(0)

        console.log("ResetStage", RefAudioControls.AudioRef.seek())
        
        // Remove Ticker
        //gsap.ticker.remove(WatchTicker);
    }



    const SyncTimelines = ()=>{            

        if(RefAudioControls.AudioRef != null){
            console.log("SyncTimelines")
            console.log(RefAudioControls.AudioRef.seek(),RefAudioControls.AudioRef.duration(), (RefAudioControls.AudioRef.seek()/RefAudioControls.AudioRef.duration()) )
                return RefAudioControls.AudioRef.seek()/RefAudioControls.AudioRef.duration()
        }
        else{
            return 0
        }
        
    }



    const _OnLoad= ()=>{
        console.log( "_OnLoad");
        setAudioReady(true)
        setAudioState(false)
    }


    const alterTime=(value)=>{

        let currentTime = RefAudioControls.AudioRef.seek();

        let AlterTime  =  value ? (currentTime + 5) : (currentTime - 5)
        
        AlterTime = AlterTime < 0 ? 0 : AlterTime;

        let TlTime = (AlterTime/RefAudioControls.AudioRef.duration()); //.toFixed(2);
 
        RefAudioControls.AudioRef.seek(AlterTime)    
        
        //console.log(value, RefAudioControls.AudioRef.duration(), currentTime, AlterTime,parseFloat(TlTime))

        SyncTimelines()
       
    
    }


/*
    const WatchTicker = ()=>{
        
        if(RefAudioControls.AudioRef === null){
            gsap.ticker.remove(WatchTicker);
        }else{
              
            // Reset on Complete
           console.log("WatchTicker" , RefAudioControls)

            let Time = (RefAudioControls.AudioRef.currentTime/RefAudioControls.AudioRef.duration)*100; 
     
            setAudioPercentage(Time);
        }
    }
*/


    useEffect(()=>{  
        
        console.log("Animated Audio AudioState", AudioState, props.KeyWord, RefAudioControls.AudioRef) 
        gsap.ticker.fps(30);
        
        ScrollTrigger.create({
            trigger:Section1,
            start:"top top",
            end:"bottom 10%",
            markers:true,
            onLeave:()=>{ StopSequence()}
        })
    
    },[AudioState])
    

    useEffect(()=>{ 
        console.log("RefAudioControls.AudioRef", props.KeyWord, RefAudioControls.AudioRef)
        setAudioDuration(RefAudioControls.AudioRef.duration())
    },[RefAudioControls])
    

    const SectionStyles = {
        backgroundImage: `url(${props.Player.BGImage})`,
        backgroundSize:'cover',
        backgroundPosition: 'center center'
      };
    
      const AvatarStyles = {
        backgroundImage: `url(${props.Player.Avatar})`,
        backgroundSize:'cover',
        backgroundPosition: 'center center'
      };


    return(
        <FullWidthContainer>
            <section className={`Section ${props.KeyWord}`}   ref={el=>{ Section1 = el}}>
                <div className="Audio" style={SectionStyles}>

                        { !AudioReady ? <AudioReadyLoader /> : null }
                        
                        <div className="Player">
                            
                            <ReactHowler src={AudioData} ref = {(ref) => (RefAudioControls.AudioRef = ref)}  onLoad={_OnLoad} html5={true} playing={AudioState} />

                           
                            {props.Icon}
                            <H1 Copy={ props.Player.Title} />
                            
                            <P Copy={[props.Player.Subtitle]} />

                            <div ref={el=>{ RefAudioControls.AudioControls = el}} className="controls"> 
                                    
                                    <button className="small" onClick={()=>{alterTime(false)}} ref={el=>{RefAudioControls.back5=el}}><Replay5Icon className="small Replay5Icon" /> </button>
                                    
                                    <button   onClick={()=>{ AudioState ? PauseSequence():PlaySequence()}}> {Btn}</button>
                                    <button className="small" onClick={()=>{alterTime(true)}}  ref={ el=>{RefAudioControls.forward5=el}} ><Forward5Icon className=" Forward5Icon" /> </button>
                                    <ProgressBar Audio={RefAudioControls}/>
                                    
                                    <button  onClick={()=>{StopSequence()}} ref={ el=>{RefAudioControls.StopAudio=el}}  ><StopIcon className="stop" /> </button>

                            </div>

                            <AudioProgressMeta  Audio={RefAudioControls} />

                        </div>
                        <QuoteCards  Quotetl={Quotetl} Duration={AudioDuration} Quotes={props.Quotes}/>
                </div>
            </section>





            <section className="AudioCopy">
                <div className="AudioCopyContainer">
                    <div className="Avatar" style={AvatarStyles}></div>
                    <AudioCopy {... props}/>
                </div>
            </section>
           
           
        </FullWidthContainer>
    )
}
export default AnimatedAudio;









/*            
        
//this is just an example plugin that allows us to animate a "blur" property like gsap.to(target, {blur:10}) and it'll feed that value to this plugin which will do all the necessary calculations to add/update a blur() value in the CSS "filter" property (in browsers that support it). We wrap it in an iife just so that we can declare some local variables in a private scope at the top.
(function() {
    const blurProperty = gsap.utils.checkPrefix("filter"),
            blurExp = /blur\((.+)?px\)/,
            getBlurMatch = target => (gsap.getProperty(target, blurProperty) || "").match(blurExp) || [];

    gsap.registerPlugin({
        name: "blur",
        get(target) {
            return +(getBlurMatch(target)[1]) || 0;
        },
        init(target, endValue) {
            let data = this,
          filter = gsap.getProperty(target, blurProperty),
          endBlur = "blur(" + endValue + "px)",
          match = getBlurMatch(target)[0],
          index;
      if (filter === "none") {
        filter = "";
      }
      if (match) {
        index = filter.indexOf(match);
        endValue = filter.substr(0, index) + endBlur + filter.substr(index + match.length);
      } else {
        endValue = filter + endBlur;
        filter += filter ? " blur(0px)" : "blur(0px)";
      }
      data.target = target; 
      data.interp = gsap.utils.interpolate(filter, endValue); 
        },
        render(progress, data) {
            data.target.style[blurProperty] = data.interp(progress);
        }
    });
})();

            */