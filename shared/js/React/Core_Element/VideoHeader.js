import React, {useEffect, useState} from 'react';
import Cover from 'react-video-cover';

// GSAP
import {gsap} from 'gsap'

import {H1, H2, P} from "../Typography/Type"
import {Container} from "../Structure/Structure";

const tl = gsap.timeline({paused:true});


const VideoHeader = (props)=>{

    const Path ='https://gdn-cdn.s3.amazonaws.com/embed/2020/07/westpac2020/assets/video/small/';
    const [Video, setVideo] = useState(props.src)
    const [svg, setSvg] = useState(props.svg)
    const [ShowH1, setH1] = useState(props.h1)
    const [ShowH2, setH2] = useState(props.h2)
    

    useEffect(()=>{        

            //console.log(props.useMeta[3][0])

            setVideo(props.src)
            setSvg(props.svg) 
            setH1(props.h1) 
            setH2(props.h2) 
    },[props.src]);
 
    useEffect(()=>{},[Video])

    return(
        <header className={props.className}>
            
            <div className="Gradient">
                <div className="PaidforBy">
                    {props.useMeta[3][0].Lead}
                    <a href={props.useMeta[3][0].CTA} target="_blank">
                        <img src={props.useMeta[3][0].Logo} />
                    </a>
                </div>
                <Container>
                        <div className={`HeaderIcon ${ShowH1}`}>
                            <img  src={`<%= path %>/images/${svg}`} />
                        </div>
                        
                        <H1 Copy={ShowH1} />
                        <H2 Copy={ShowH2} />
                </Container>
            </div>
            
                <Cover
                    className="VideoHeader"
                    videoOptions={
                        {
                            src:`${Path}${Video}`,
                            autoPlay: true,
                            muted: true,
                            loop: true,
                            playsInline: true
                        }
                    }
                    remeasureOnWindowResize
                />
        </header>
    )
}

export default VideoHeader