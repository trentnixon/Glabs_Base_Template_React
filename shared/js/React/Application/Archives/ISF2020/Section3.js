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

const Section3 = ()=>{
    let Section3 = useRef(null)

    

    let AnimateCircles = useRef(null)
    let circle1  = useRef(null)
    let circle2  = useRef(null)
    let circle3  = useRef(null)


    let AnimateBoxes = useRef(null)
    let Box1 = useRef(null)
    let Box2 = useRef(null)
    

    useEffect(()=>{
        let tl = gsap.timeline({ paused: true,
            scrollTrigger: {
                trigger: AnimateCircles,
                id:"Section_3_AnimateCircles",
                toggleActions:"restart pause reverse pause",
                start: "top center",
                end: "bottom center",
                scrub: 1,
                markers: true
            }
         }
        );
        
        tl.fromTo( circle1, {   scale:1.3,   duration:2,ease: "power2.out"},{  scale:0.7,  duration:2, ease: "power2.out"},"Circles" )
        .fromTo( circle2, {     scale:1.1,     duration:2,ease: "power2.out"  },{ scale:0.9, duration:2, ease: "power2.out"  },"Circles")
        .fromTo( circle3, {     scale:0.7,     duration:2,ease: "power2.out"  },{ scale:1.3, duration:2, ease: "power2.out" },"Circles")

        let Boxtl = gsap.timeline({ paused: true,
            scrollTrigger: {
                trigger: AnimateBoxes,
                id:"Section_3_AnimateBoxes",
                start: "top center",
                end: "top 30%",
                scrub: 1,
                markers: true
            }
         }
        );

        Boxtl.fromTo(Box1, {x:0, scale:1.5},{x:-50, y:-50, scale:1}, "Boxes")
        .fromTo(Box2, {x:0,scale:0.8},{x:50, y:50, scale:1.3}, "Boxes")
        .to(Box1, {x:-0, y:-0, scale:0.8}, "BoxesBack")
        .to(Box2, {x:0, y:0, scale:1.5}, "BoxesBack")
           
             
    },[])
    
    return(

        <Container>
            <section className="Section Section3"   ref={el=>{ Section3 = el}}>
                <H1 Copy="2 x SPLIT TIMELINES" />
                <H1 Copy="If you withdraw $10,000 now, the impact on your retirement could be significant." />
                
                <P Copy={["A 25-year-old taking out $10,000 now could have $49,000 less in retirement, a 35-year-old could lose up to $34,000 and a 45-year-old up to $23,000"]} />

                <P Copy={["TL 1"]} />

                <div className="Circles" ref={el=>{ AnimateCircles = el}}>
                    <div className="Circle Circle1" ref={el=>{ circle1 = el}}>  
                            <H1 Copy="25" />
                            <P Copy={["$49,000"]} />
                     </div>
                    <div className="Circle Circle2" ref={el=>{ circle2 = el}}>  
                            <H1 Copy="35" />
                            <P Copy={["$34,000"]} />
                    </div>
                    <div className="Circle Circle3" ref={el=>{ circle3 = el}}>  
                            <H1 Copy="45" />
                            <P Copy={["$23,000"]} />
                    </div>
                </div> 

                <P Copy={["The government estimated 1.65 million Australians would take out a total of $27 billion from super. Australia-wide, an average of 15% of workers have accessed their Super early.",
                            "Already, 2.1 million Australians have taken out at least $15 billion and it appears likely demand will far surpass forecasts. "]} />

                <H2 Copy="Industry funds have paid:" />
                <H2 Copy="TL 2" />
                

                <div className="Boxes" ref={el=>{ AnimateBoxes = el}}>
                    <div className="Box Box1" ref={el=>{ Box1 = el}}>
                        <H2 Copy="$10.3 billion from Super" /> 
                    </div>
                    <div className="Box Box2" ref={el=>{ Box2 = el}}>
                        <H2 Copy="96% within 5 business days of request" />  
                    </div>
                </div>

            </section>
        </Container>
    )
}
export default Section3;    