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
import AudioForward from "./untilities/svg/Forward"
import AudioBackward from "./untilities/svg/Backwards"
// import StopIcon from '@material-ui/icons/Stop';

import {Master_Quote} from "./Tweens/QuoteSequence"
import {Master_Image} from "./Tweens/ImageSequence"


// Structure
import {FullWidthContainer} from "../../Structure/Structure";
//import {H1, H2, P} from "../../Typography/Type"

// Components
import ProgressBar from "./AudioPlayer/ProgressBar";
import ProgressImageReveal from "./AudioPlayer/ProgressImageReveal";

import QuoteCards from "./QuoteAnimationCards";
import AudioCopy from "./AudioCopy";
import AudioReadyLoader from "./AudioReadyLoader"
import AudioProgressMeta from "./AudioProgressMeta";



//let Master = gsap.timeline({ paused: true  })

let MasterTl = {
    Music:gsap.timeline({ paused: true, }),
    Sport:gsap.timeline({ paused: true, }),
    Podcast:gsap.timeline({ paused: true, }),
}

const AnimatedAudio = (props)=>{

    // Timeline
    let AnimationMaster = MasterTl[props.KeyWord];

    // Consts
    const BtnPlay = <AudioPlay className="Play" />;
    const BtnPause = <AudioPause className="Pause" />;
  
    // Refs
    let Section1 = useRef(null);

    const DomRefs = {
        svgRef:useRef(null),
        H1:useRef(null),
        P:useRef(null),
    }
    const RefAudioControls = {
            AudioRef:useRef(null),
            AudioButton:useRef(null),
            AudioControls:useRef(null),
            back5:useRef(null),
            forward5:useRef(null),
            StopAudio:useRef(null),
            SessionKill:useRef(null)
        }

    let TimedImageAnimation = useRef(props.Images.map(() => createRef()));
    let TimedQuoteAnimation = useRef(props.Quotes.map(() => createRef()));

    // UseState
    const [AudioDestory, setAudioDestory] = useState(false);
    const [AudioData,setAudioData] = useState(props.Player.Audio)  
    
    const [AudioReady, setAudioReady] = useState(false) 
    const [AudioDuration, setAudioDuration] = useState(false) 
    const [AudioState, setAudioState] = useState(false) 
    const [Btn, setBtn] = useState(BtnPlay)




      // Functions

      // Utils

      const GetAudioTime = ()=>{
        let time = Number(RefAudioControls.AudioRef.seek())
                if (isNaN(time)) {
                    time = RefAudioControls.AudioRef._howler._sounds[0]._seek
        }
        return time;
    }

    const  handleActivity = (forcedFlag) => {
        if (typeof forcedFlag === 'boolean') { return; }
        return document.hidden ? PauseSequence() : true
      }

      /* ********************************************* */
      /* Audio Methods */

      const PlaySequence = ()=>{
            // Play Audio and Sequence
            console.log("PLAY SEQUENCE",)

            // Play ALl
            setAudioState(true)
            RefAudioControls.AudioRef.play()

            //setAudioState(true)
            setBtn(BtnPause)
            
            let syncTime = SyncTimelines();

            //console.log("syncTime", syncTime);
            AnimationMaster.progress(syncTime)
            AnimationMaster.play()
            
    }


    const PauseSequence = ()=>{
        //console.log(GetAudioTime())
        // Pause Audio and Sequence
        console.log("PAUSE SEQUENCE")
        
        // Audio
        setAudioState(false)
        setBtn(BtnPlay)
        // Timelines
       
        AnimationMaster.pause()
    }


    
    const StopSequence = ()=>{

        console.log("STOP AUDIO and RESTART SEQUENCE", RefAudioControls.AudioRef)
    
        // Player
        RefAudioControls.AudioRef.stop();
        
        //setAudioState(false)
        //setBtn(BtnPlay)

        // Timeline
        AnimationMaster.pause().progress(0)
        //RefAudioControls.AudioRef.seek(0)

    }

    /* End Audio */
    /* ********************************************* */

    /* ********************************************* */
    /*  Playing with Time  */

    const SyncTimelines = ()=>{            

        if(RefAudioControls.AudioRef != null){
                //console.log(Quotetl.totalDuration(), Quotetl.progress(), RefAudioControls.AudioRef.duration(), (GetAudioTime()/RefAudioControls.AudioRef.duration()));
                return GetAudioTime()/RefAudioControls.AudioRef.duration()
        }
        else{
            return 0
        }
    }




    const alterTime=(value)=>{

        let forward = 5
        let backward = 5
        console.log("Alter Timecode ", GetAudioTime() );

        let AlterTime  =  value ? (GetAudioTime() + forward) : (GetAudioTime() - backward)        
        AlterTime = AlterTime < 0 ? 0 : AlterTime;

        RefAudioControls.AudioRef.seek(AlterTime)    
        AnimationMaster.progress(SyncTimelines())
        //Imagetl.progress(SyncTimelines())

    }

    /* End Time Travel */
    /* ********************************************* */




    /* ********************************************* */
    /* Howler Methods  */
    const _OnLoad= ()=>{
        console.log( "_OnLoad");
        setAudioReady(true)
        setAudioState(false)
    }

    const _Onstop = ()=>{
        console.log("_Onstop")    
    }
    
    const _onEnd = ()=>{
        console.log("_onEnd")
    }

    const _onLoadError = ()=>{
        console.log("_onLoadError")
    }

    /* ********************************************* */

    // Create Master

    const CreateMaster = ()=>{

        //console.log(`Current Load AudioDuration for ${props.KeyWord} : ${AnimationMaster.duration()} =  ${AudioDuration}`);

        if(!AudioDuration || AudioDuration === 0 ){ 
                console.log("Create Master audio Duration not yet Available", props.KeyWord); 
            }

        else if(AnimationMaster.duration() !=  AudioDuration){
          
            //AnimationMaster
            
            AnimationMaster.add(Master_Image(TimedImageAnimation,props.Images,AudioDuration),"Stage")
                //.add(Master_Quote(TimedQuoteAnimation,props.Quotes,AudioDuration),"Stage")

            //console.log(`${props.KeyWord} MASTER POST  ${AnimationMaster.duration()} = ${AudioDuration}`);

            if(AnimationMaster.duration() !== AudioDuration){
                AnimationMaster.kill();
                //console.warn(`ERROR : ${props.KeyWord} Master Killed ${AnimationMaster.duration()} = ${AudioDuration}`)
            }
            
        }
        else
            {
                //console.log(`Current Load AudioDuration for ${props.KeyWord}  == ${AnimationMaster.duration()} and ${AudioDuration}. Do Nothing!`);
            }
        
    }



    const CreateAnimationPlatform = ()=>{
       
        //console.log("AnimationMaster.duration()", AnimationMaster.duration(), AudioDuration)

        if(AudioDuration && AudioDuration > 0 ){ 

            //console.log("AudioDuration in gsap set up ", AudioDuration, RefAudioControls.AudioRef)

                gsap.ticker.fps(60);

                ScrollTrigger.create({
                    trigger:Section1,
                    id:props.KeyWord,
                    start:"-10% top",
                    end:"110% center",
                    markers:false,
                    onToggle:(self)=>{ setAudioDestory(!self.isActive)},
                    onLeave:()=>{ PauseSequence()},
                    onLeaveBack:()=>{ PauseSequence()}
                })

                
                let tl = gsap.timeline({
                    paused: true,
                    scrollTrigger: {
                        trigger: Section1,
                        id:"Animate In",
                        start: "top 40%",
                        end: "bottom 90%", 
                        scrub: 1,
                        markers: false
                    }
                 }
                );
           
        
                tl.fromTo(DomRefs.H1, {x: -100, opacity:0}, {x:0, opacity:1, duration:1,ease: "power2.out"}, "LoadIn")
                .fromTo(DomRefs.P, {x: -100, opacity:0}, {x:0, opacity:1,duration:1,ease: "power2.out"}, "LoadIn+=.5")
                .fromTo(RefAudioControls.AudioControls, {x: -100, opacity:0}, {x:0, opacity:1,duration:1,ease: "power2.out"}, "LoadIn+=1")
                .fromTo(DomRefs.svgRef, {scale: 0, opacity:0}, {scale:1, opacity:1,duration:2,ease: "power2.out"}, "LoadIn+=1.5")
                
        }
    }

    /* ********************************************* */
    /* Useeffect */
  
    useEffect(()=>{
        console.log("AudioDestory", AudioDestory)
        if(AudioDestory){
            console.log("AudioDestory", AudioDuration, RefAudioControls.AudioRef)
            RefAudioControls.AudioRef.howlerState()
        }
    },[AudioDestory])

    useEffect(()=>{ 
        setAudioDuration(RefAudioControls.AudioRef.duration());
    },[RefAudioControls])
    
    useEffect(()=>{

        CreateMaster();
        CreateAnimationPlatform()
      
    },[AudioDuration])



      // Window Listener
        useEffect(() => {

            document.addEventListener('visibilitychange', handleActivity)
            window.addEventListener('blur', () => handleActivity(false))
            window.addEventListener('focus', () => handleActivity(true))

            return () => {
            window.removeEventListener('blur', handleActivity)
            window.removeEventListener('focus', handleActivity)
            document.removeEventListener('visibilitychange', handleActivity)
            }

        }, [])


    /** Styles */
    const SectionStyles = {
        backgroundImage: `url(${props.Player.BGImage})`,
        backgroundSize:'cover',
        backgroundPosition: '0 0'
      };
    
      const AvatarStyles = {
        backgroundImage: `url(${props.Player.Avatar})`,
        backgroundSize:'cover',
        backgroundPosition: 'center center'
      };



    return(
        <FullWidthContainer>
            <section  id={`${props.KeyWord}`} className={`Section ${props.KeyWord}`}   ref={el=>{ Section1 = el}}>
                <div className="Audio" style={SectionStyles}>

                        { !AudioReady ? <AudioReadyLoader /> : null }
                        
                        <div className="Player">
                            
                            <ReactHowler 
                                src={AudioData} 
                                ref = {(ref) => (RefAudioControls.AudioRef = ref)}  
                                onLoad={_OnLoad} 
                                html5={true} 
                                playing={false} 
                                onStop={_Onstop}
                                onLoadError={_onLoadError}
                                onEnd={_onEnd}
                            />


                            <span ref={el=>{ DomRefs.svgRef = el}} >{props.Icon}</span>
                        
                            <h1 ref={el=>{ DomRefs.H1 = el}} className="Header">{props.Player.Title}</h1>
                           
                            <p ref={el=>{ DomRefs.P = el}} className="Header">{props.Player.Subtitle}</p>

                            <div ref={el=>{ RefAudioControls.AudioControls = el}} className="controls"> 
                                    
                                    <button className="small" onClick={()=>{alterTime(false)}} ref={el=>{RefAudioControls.back5=el}}><AudioBackward className="small Replay5Icon" /> </button>
                                    
                                    <button   onClick={()=>{ AudioState ? PauseSequence():PlaySequence()}}> {Btn}</button>
                                    <button className="small" onClick={()=>{alterTime(true)}}  ref={ el=>{RefAudioControls.forward5=el}} ><AudioForward className=" Forward5Icon" /> </button>
                                    <div className="ProgressMeta">
                                        <ProgressBar Audio={RefAudioControls}/>
                                        <AudioProgressMeta  Audio={RefAudioControls} />
                                    </div>

                            </div>
                        </div>
                        <QuoteCards       forwardRef={TimedQuoteAnimation}  Quotes={props.Quotes}/>
                        <ProgressImageReveal forwardRef={TimedImageAnimation} Images={props.Images}/>
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
    //  <button  onClick={()=>{StopSequence()}} ref={ el=>{RefAudioControls.StopAudio=el}}  ><StopIcon className="stop" /> </button>