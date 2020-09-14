import React, {useEffect, useState, useRef} from 'react';

// Actions
import {GA} from "../../actions/ga"
import {gsap} from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== `undefined`) {
    gsap.registerPlugin(ScrollTrigger)
    gsap.core.globals("ScrollTrigger", ScrollTrigger)
  }


// Structure
import {Container} from "../../Structure/Structure";
import {H1, H2, P} from "../../Typography/Type"

const Section9 = ()=>{
    let Section9 = useRef(null)
    let AnimateBoxes = useRef(null)
    let Box1  = useRef(null)
    let Box2  = useRef(null)
    let Box3  = useRef(null)
    let Box4  = useRef(null)  

    useEffect(()=>{
        let tl = gsap.timeline({
            paused: true,
            scrollTrigger: {
                trigger: Section9,
                pin:'Section9',
                id:"Section 9",
                start: "top 80%",
                end: "bottom 60%",
                scrub: 1,
                markers: true
            }
         }
        );

        tl.fromTo( Box1, {opacity:0, xPercent:-10, duration:2},{ opacity:1,  xPercent:0,duration:2  },)
        .fromTo( Box2, {opacity:0, xPercent:-10, duration:2},{ opacity:1,  xPercent:0,duration:2  },)
        .fromTo( Box3, {opacity:0, xPercent:-10, duration:2},{ opacity:1,  xPercent:0,duration:2  },)
        .fromTo( Box4, {opacity:0, xPercent:-10, duration:2},{ opacity:1,  xPercent:0,duration:2  },)

    },[])
    
    return(

        <Container>
            <section className="Section Section9"   ref={el=>{ Section9 = el}}>
                <H1 Copy="Single Timeline" />
             
                <div className="Boxes" ref={el=>{ AnimateBoxes = el}}>
                    <div className="Box Box1" ref={el=>{ Box1 = el}}>  Stronger economy. 0.17% GDP →</div>
                    <div className="Box Box2" ref={el=>{ Box2 = el}}>  Higher taxation. $663m Commonwealth Revenue </div>
                    <div className="Box Box3" ref={el=>{ Box3 = el}}>  Generate private wealth. $10.3k per member → </div>
                    <div className="Box Box4" ref={el=>{ Box4 = el}}>  Reduced pension payouts. $5m in lower payments </div>
                </div> 

                <H1 Copy="This adds up to  $702 million in annual  budget savings" />

            </section>
        </Container>
    )
}
export default Section9;    