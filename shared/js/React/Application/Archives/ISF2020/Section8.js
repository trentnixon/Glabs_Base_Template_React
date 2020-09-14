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

const Section8 = ()=>{
    let Section8 = useRef(null)
    let AnimateBoxes = useRef(null)

    let ProjectBoxes = useRef(null) 
    let Project1  = useRef(null)
    let Project2  = useRef(null)
    let Project3  = useRef(null)
    let Project4  = useRef(null)

    useEffect(()=>{
        let Panels = gsap.timeline({
            paused: true,
            scrollTrigger: {
                trigger: ProjectBoxes,
                toggleActions:"restart pause reverse pause",
                id:"Section 6 Panels",
                start: "top top",
                end: "bottom bottom",
                scrub: 1,
                pin:true,
                markers: true,
                //anticipatePin:1,
            }
         }
        );

        Panels.from(Project1, {xPercent:0})
        Panels.from(Project2, {xPercent:-100})
        Panels.from(Project3, {xPercent:-100})
        Panels.from(Project4, {xPercent:-100})
    },[])
    
    return(

        <Container>
            <section className="Section Section8"   ref={el=>{ Section8 = el}}>
                <H1 Copy="Single Timeline" />
                <H1 Copy="Investment in Super is the best way to stabilise the Australian economy after Covid-19" />
                <P Copy={["Industry super funds outperform retail funds – on average, by 1.7 per cent a year over the past 19 years. In a single year, this delivers $1 billion in direct value or support 20,000 jobs across the country.",
                        "That grows the federal budget bottom line through increased tax revenue, lower debt interest payments and reduced age-related payments."
                        ]} />


                <div className="Panels" ref={el=>{ ProjectBoxes = el}}>
                    <div className="Panel Panel1" ref={el=>{ Project1 = el}}>  $2.8 billion  capital expenditure </div>
                    <div className="Panel Panel2" ref={el=>{ Project2 = el}}>  $2.7 billion  upstream spending </div>
                    <div className="Panel Panel3" ref={el=>{ Project3 = el}}>  Creates  46,000 jobs </div>
                    <div className="Panel Panel4" ref={el=>{ Project4 = el}}>  2.6x short-term multiplier </div>
                </div> 

                <P Copy={["Industry super funds contribute around budget savings through infrastructure growth, higher tax revenue, greater private wealth, lower pension payouts and more."]} />
            </section>
        </Container>
    )
}
export default Section8;    