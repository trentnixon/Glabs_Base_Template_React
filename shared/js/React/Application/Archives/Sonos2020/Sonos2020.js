import React, { useEffect,useRef } from 'react';

// Actions
import {GA} from "../../actions/ga"
// Structure
import {FullWidthContainer, Container} from "../../Structure/Structure";
//import {H1, H2, P} from "../../Typography/Type"
// Elements
// import Standfirst from "../../Core_Element/StandFirst"
// Sections
import AnimatedAudio from "./AnimatedAudio"

// Section Icons
import MusicIcon from "./untilities/svg/Section_Icon_Music";
import SportsIcon from "./untilities/svg/Section_Icon_Sport";
import PodcastIcon from "./untilities/svg/Section_Icon_Podcast";


const ISF = (props)=>{

    let MovieRef = useRef(null)
    let SportRef = useRef(null)
    let PodcastRef = useRef(null)

    const handleScroll = (e)=>{

            console.log("Scroll",e.current.offsetTop);

           
            window.scrollTo({
                top: e.current.offsetTop+window.innerHeight,
                left: 0,
                behavior: 'smooth'
              })
            

    }

    return(
        <div className="Sonos">


            <FullWidthContainer>
               
                <div className="introCopy">
                    <p>Inside the meticulous makings of soundscapes across 
                            <span onClick={()=> handleScroll(MovieRef)} >film <AudioSymbol /> </span>,   
                            <span onClick={()=> handleScroll(SportRef)}>sports <AudioSymbol /></span> and  
                            <span onClick={()=> handleScroll(PodcastRef)} >podcasts <AudioSymbol /></span>
                    </p>
                    {
                        props.Meta[1].map((Copy, i)=>{
                            return(
                                <p  key={i} dangerouslySetInnerHTML={ { __html: Copy.Copy} }></p> 
                                ) 
                        })
                    }
                </div>

                <div ref={MovieRef} > 
                    <AnimatedAudio 
                        KeyWord="Music"
                        APP={props.APPLICATION}
                        Quotes={props.APPLICATION[2]}
                        Images={props.APPLICATION[5]}
                        Player={props.APPLICATION[0][0]}
                        Icon={<MusicIcon />} 
                        forwardRef={MovieRef}
                    /> 
                </div>

                <div ref={SportRef} > 
                <AnimatedAudio 
                    KeyWord="Sport"
                    APP={props.APPLICATION}
                    Quotes={props.APPLICATION[3]}
                    Player={props.APPLICATION[0][1]}
                    Images={props.APPLICATION[6]}
                    Icon={<SportsIcon />}
                /> 
                </div>

                <div ref={PodcastRef} > 
                    <AnimatedAudio 
                        KeyWord="Podcast"
                        APP={props.APPLICATION}
                        Quotes={props.APPLICATION[4]}
                        Player={props.APPLICATION[0][2]}
                        Images={props.APPLICATION[7]}
                        Icon={<PodcastIcon />}
                    /> 
                </div>

            </FullWidthContainer>
            
        </div>
    )
}
export default ISF;


const AudioSymbol = ()=>{
    return(
        <svg width="33px" height="27px" viewBox="0 0 33 27" version="1.1" >
                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="SONOS-Sound-Wall-Desktop-Copy" transform="translate(-636.000000, -164.000000)" fill="#2D8569">
                        <g id="Intro" transform="translate(246.000000, 55.000000)">
                            <g id="Audio-Copy" transform="translate(248.500000, 108.500000)">
                                <g id="audioSymbol" transform="translate(141.500300, 0.499600)">
                                    <path d="M14.649,0 L16.129,0.002 L16.129,26.375 L14.651,26.375 L6.735,18.456 L1.279,18.456 L1.47437618e-13,17.179 L1.47437618e-13,9.251 L1.418,7.849 L6.799,7.849 L14.649,0 Z M26.0285,2.6735 L26.8195,1.8825 C30.0725,4.5585 32.1495,8.6135 32.1495,13.1545 C32.1495,17.5619412 30.1928798,21.5115502 27.1034546,24.1868264 L26.8195,24.4265 L26.0285,23.6355 C28.2785,20.7375 29.6335,17.1075 29.6335,13.1545 C29.6335,9.34267857 28.3735574,5.82933801 26.2661257,2.98658314 L26.0285,2.6735 L26.8195,1.8825 Z M21.1536,6.0405 C22.9716,7.8605 24.1026,10.3765 24.1026,13.1545 C24.1026,15.9325 22.9716,18.4485 21.1536,20.2685 L21.1536,20.2685 L20.2106,19.3255 C21.3956,17.5635 22.0876,15.4415 22.0876,13.1545 C22.0876,10.8675 21.3956,8.7445 20.2106,6.9835 L20.2106,6.9835 Z" id="Combined-Shape"></path>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
    )
}