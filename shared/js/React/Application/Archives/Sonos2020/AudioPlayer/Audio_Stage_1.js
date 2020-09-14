import React , { useState,useEffect,useRef,createRef, useMemo }from 'react';
//import ReactHowler from 'react-howler'
// GSAP
import {gsap} from 'gsap'

// JSX 
import AudioPlayer from "./AudioPlayer";
import Stage1_JXS from "./Stages/Section1_ImageGallery";
import Stage2_JXS from "./Stages/Section1_SushiBowl";
import Stage3_JXS from "./Stages/Section3_parallax"
import ProgressBar from "./ProgressBar";
// TWEENS
// Audio
import {toggleControls} from "../Tweens/ToggleControls";
import { toggleAudioPosition } from "../Tweens/ControlPosition";

import {CreateTrackingBox} from "../Tweens/BoxTracking";
// Masters
import {Master_Stage1} from "../Tweens/Section1/Master_Stage1";
import {Master_Stage2} from "../Tweens/Section1/Master_Stage2";
import {Master_Stage3} from "../Tweens/Section1/Master_Stage3";
// Icons
import AudiotrackIcon from '@material-ui/icons/Audiotrack';


const Chapters = [
    {
        Chapter:"Title 1",
        timecode: 0
    },
    {
        Chapter:"Title 2",
        timecode: 27
    },
    {
        Chapter:"Title 3",
        timecode: 60
    }
]


const Images=[
    "<%= path %>/images/gsapRainImage1.jpg",
    "<%= path %>/images/gsapRainImage2.jpg",
    "<%= path %>/images/gsapRainImage3.jpg",
    "<%= path %>/images/gsapRainImage4.jpg",
    "<%= path %>/images/gsapRainImage5.jpg"
]

const Stage1Text=[
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
]



// Set Stage Timelines
let MovePlayer = gsap.timeline({ paused: true })
let AudioIntro = gsap.timeline({ paused: false })
let Master = gsap.timeline({ paused: true  })
let EndTransition = gsap.timeline({ paused: true })



const Story1 = (props)=>{

        // States and Consts
        // State
        const [AudioData,setAudioData] = useState("<%= path %>/audio/VOX_1.mp3")  

        // Ref Objects
        let Intro = useRef(null)
        const Stage1RefObj={
            Stage1:useRef(null),       
            ImageGallery:useRef(null),
            ImageContainerRef:useRef(Images.map(() => createRef())),
            ImageRef: useRef(Images.map(() => createRef())),
            PRef:useRef(Stage1Text.map(() => createRef()))   
        }

        const Stage2RefObj={
            SushiBG:useRef(null), 
            Stage2:useRef(null)
        }

        const Stage3RefObj={
            Parallax:useRef(null),
            overlay :useRef(null),
            layer1 :useRef(null),
            layer2 :useRef(null),
            layer3 : useRef(null),
            layer4 : useRef(null)
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

   
    // Functions
    const PlaySequence = ()=>{

        // Play Audio and Sequence
        console.log("PLAY SEQUENCE")
        // Show Audio Controls
        toggleControls(RefAudioControls).progress(1).reverse()

        // Play ALl
        RefAudioControls.AudioRef.play()
        Master.play()
        MovePlayer.play()
    }


    const PauseSequence = ()=>{
        // Pause Audio and Sequence
        console.log("PAUSE SEQUENCE")

        // Hide Audio Controls
        toggleControls(RefAudioControls).play()

        // Pause All
        RefAudioControls.AudioRef.pause()
        Master.pause()
        MovePlayer.pause()

    }


    const alterTime = (direction)=>{
        let CurrentTime = RefAudioControls.AudioRef.currentTime, NewPosition = 0
       
        RefAudioControls.AudioRef.currentTime  =  direction ? CurrentTime + 5 : CurrentTime - 5
        NewPosition = (RefAudioControls.AudioRef.currentTime/RefAudioControls.AudioRef.duration)
        
        console.log(direction, RefAudioControls.AudioRef.currentTime, NewPosition)
        
        Master.progress(NewPosition);
        MovePlayer.progress(NewPosition);

        if(NewPosition === 1){ ResetStage() }
      
    }


    const StopSequence = ()=>{
        console.log("STOP and RESTART SEQUENCE")

        MovePlayer.paused(true)
        RefAudioControls.AudioRef.pause()
        RefAudioControls.AudioRef.currentTime=0
        ResetStage()
    }


    const ResetStage=()=>{
        console.log("ResetStage")
        RefAudioControls.AudioRef.pause()
        RefAudioControls.AudioRef.currentTime=0
        Master.pause().progress(0)
        MovePlayer.pause().progress(0)
        AudioIntro.progress(0).play()
        
    }

    const WatchTicker = ()=>{

            if(RefAudioControls.AudioRef === null){
                gsap.ticker.remove(WatchTicker);
            }else{
                console.log("Ticker here")    
                // Reset on Complete
                if(RefAudioControls.AudioRef.currentTime === RefAudioControls.AudioRef.duration){
                    console.log("Audio has Ended")
                    // FIXTHIS  
                    gsap.ticker.remove(WatchTicker);
                   // Pause All
                    RefAudioControls.AudioRef.pause()
                    Master.pause()
                    MovePlayer.pause()
                    SessionKill();
                    
                    
                }
            }
        }



     // TWEENS
        const CreateMaster = ()=>{

            Master.set(Stage2RefObj.SushiBG, {yPercent:-100} )
                   .add(HideStageIntoText())
                    .add(Master_Stage2(Stage2RefObj),"=+1")
                    .add(Master_Stage3(Stage3RefObj), "-=1.5")
                    .add(Master_Stage1(Images,Stage1Text, Stage1RefObj), "Start-=.5")
                    .add(CreateTrackingBox(RefAudioControls), "Start-=.5")
            
                    //gsap.ticker.fps(60);
                    gsap.ticker.add(WatchTicker);
        }

        const HideStageIntoText = ()=>{
            Intro
            const tl = gsap.timeline();

            tl.to(Intro,{yPercent:10, opacity:0, duration:.5, ease: "power3.inOut"})
            
            return tl;
        }


        const CreateAudioIntro = (RefAudioControls)=>{ 
            const {AudioButton} = RefAudioControls
            
            AudioIntro.set(".Intro",  { autoAlpha:1}) 
            .from(".Intro",{opacity:0, y:-10, duration:.7},"Intro")
            .fromTo(AudioButton, {opacity:0, y:-10}, {opacity:1, y:0, duration:.7},"Intro")
            
            MovePlayer.add(toggleAudioPosition(RefAudioControls));
        }
       

        const CreateEndTransition=(RefAudioControls)=>{
            const {AudioButton} = RefAudioControls
            EndTransition.set(".TransitionContainer",  { autoAlpha:1})
            .to(AudioButton,{opacity:0})
            .from(".TransitionCircle", {y:1000, opacity:0, duration:1.1, ease:"back.out(1)" },"+=.3")
            .to(".TransitionCircle", {scale:1000, duration:.9, ease: "power4.in" }, "+=1")
       
        }
        const SessionKill = ()=>{

                console.log("SessionKill")
          // toggleControls(RefAudioControls).progress(1).reverse();
          CreateEndTransition(RefAudioControls)
            EndTransition.play();
          
            setTimeout(
                ()=>{
                    Master.clear()
                    MovePlayer.clear()
                    AudioIntro.clear()
                    EndTransition.clear()
                    props.setAudio(0)
                }
                ,
                ((toggleControls(RefAudioControls).progress(1).reverse().totalDuration() + EndTransition.play().totalDuration())*1000)
            )
            
        }

        useEffect(()=>{ 

            CreateMaster()
            toggleControls(RefAudioControls);
            CreateAudioIntro(RefAudioControls)  
            
            console.log("props", props)
        },[])



// 
    return (
        <>
                <div className="stages">
                        <div className="Intro" ref={el => Intro = el} >
                            <AudiotrackIcon />
                            <h1>Click to Play for an Audio Experience</h1>
                        </div>
                        <AudioPlayer 
                            PauseSequence={PauseSequence}
                            StopSequence={StopSequence}
                            PlaySequence={PlaySequence}
                            alterTime={alterTime}
                            SessionKill={SessionKill}
                            forwardedRef={RefAudioControls} 
                            Audio={AudioData} 
                        />

                        <Stage1_JXS  forwardedRef={Stage1RefObj} Data={Images} Copy={Stage1Text} />
                        <Stage2_JXS  forwardedRef={Stage2RefObj}  />
                        <Stage3_JXS  forwardedRef={Stage3RefObj} />
                        <ProgressBar Audio={RefAudioControls}/>

                        <div className="TransitionContainer">
                            <div className="TransitionCircle">
                            </div>
                        </div>
                </div>
        </>
    )
}
//
//<TrackingBox Paused={StageState.state.Paused}/>




export default Story1;


/* ********* TRACKER * *********************** */

let Track = gsap.timeline({ paused: true, })
const TrackingBox = (props)=>{

    const RefObj={ TrackingBox:useRef(null), }
    
    const TrackingBox = ()=>{
        Track.add(CreateTrackingBox(RefObj), "Start")
    }

    useEffect(()=>{ TrackingBox()},[])
    useEffect(()=>{  Track.paused( props.Paused) },[props.Paused])

    return(
        <div className="RedBox" ref={ el=>{RefObj.TrackingBox=el}}></div>  
    )
}

/**
 *   <div>
                    <h1>Chapters</h1>
                    <ul>
                        <li onClick={()=>{Selectchapter(0)}}>Chapter 1</li>
                        <li onClick={()=>{Selectchapter(1)}}>Chapter 2</li>
                        <li onClick={()=>{Selectchapter(2)}}>Chapter 3</li>
                    </ul>
                </div>
 */