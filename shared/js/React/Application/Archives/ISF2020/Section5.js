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
import {H1, P} from "../../Typography/Type"

const Section5 = ()=>{

    let Section5 = useRef(null)
    let Section5Icons = useRef(null)
    let Section5Icons1  = useRef(null)
    let Section5Icons2  = useRef(null)


    useEffect(()=>{
        let tl = gsap.timeline({
            paused: true,
            scrollTrigger: {
                trigger: Section5Icons,
                toggleActions:"restart pause reverse pause",
                pin:'Section5',
                id:"Section 5",
                start: "top center",
                end: "bottom center",
                scrub: 1,
                markers: true
            }
         }
        );


        tl.fromTo( Section5Icons1, {opacity:0, xPercent:-30, duration:1.5,ease: "power2.out"}, { opacity:1,  xPercent:0, duration:1.5,ease: "power2.out"  })
        .fromTo(   Section5Icons2, {opacity:0, xPercent:30, duration:1.5,ease: "power2.out"}, { opacity:1,  xPercent:0, duration:1.5, ease: "power2.out"  })

    },[])
    
    return(

        <Container>
            <section className="Section Section5"   ref={el=>{ Section5 = el}}>
                <H1 Copy="Single TimeLines" />
                <H1 Copy="Less Super means working longer." />
                
                <P Copy={["Back in 2014, boosts to Super contributions were delayed until 2021. That means the planned increase from 9.5% to 12% won’t be finalised until 2025.",
                          "The delay has already cost the average Australian $4,300 in lost Super. Now, the government is even talking about scrapping it altogether.",
                          "If the proposal to freeze succeeds, the impact on average Australians will be severe – especially those who’ve withdrawn the $20,000 available during Covid-19."]} />
                        
                <div className="Boxes" ref={el=>{ Section5Icons = el}}>
                    <div className="Box Box1" ref={el=>{ Section5Icons1 = el}}>  
                            [Icon ]
                            <P Copy={["On average, a 30-year-old man will need to work an extra 6 ½ years to make up the difference, or $180,000 less in retirement at age 67"]} /> 
                    </div>
                    <div className="Box Box2" ref={el=>{ Section5Icons2 = el}}>  
                            [Icon ]
                            <P Copy={["The impact on women is even greater. A 30-year-old woman on average earnings faces an extra 8 years of work, or $150,000 less at retirement at age 67"]} /> 
                    </div>
                </div> 

            </section>
        </Container>
    )
}
export default Section5;    