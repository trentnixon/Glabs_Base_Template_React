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

const Section6 = ()=>{
    let Section6 = useRef(null)
    let Section6Icons = useRef(null)
    
    let Section6Icons1  = useRef(null)
    let Section6Icons2  = useRef(null)
    let ProjectBoxes = useRef(null) 
    let Project1  = useRef(null)
    let Project2  = useRef(null)
    let Project3  = useRef(null)
    let Project4  = useRef(null)


    useEffect(()=>{
        let tl = gsap.timeline({
            paused: true,
            scrollTrigger: {
                trigger: Section6Icons,
                pin:'.Panels',
                id:"Section 6",
                start: "top center",
                end: "bottom center", 
                scrub: 1,
                markers: true
            }
         }
        );
        tl.fromTo( Section6Icons1, {opacity:0, yPercent:-30, duration:1.5,ease: "power2.out"}, { opacity:1,  yPercent:0, duration:1.5,ease: "power2.out"  })
        .fromTo(   Section6Icons2, {opacity:0, yPercent:30, duration:1.5,ease: "power2.out"}, { opacity:1,   yPercent:0, duration:1.5, ease: "power2.out"  })
   

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

        Panels.from(Project1, {yPercent:0})
        Panels.from(Project2, {yPercent:100})
        Panels.from(Project3, {yPercent:100})
        Panels.from(Project4, {yPercent:100})


    },[])



    // 
    
    return(

        <Container>
            <section className="Section Section6"   ref={el=>{ Section6 = el}}>
                <H1 Copy="2 x SPLIT TIMELINES" />
                <H1 Copy="Draining Super affects the whole economy" />
                
                <P Copy={[
                    "Industry super fund members already collectively own more than $104 billion in Australian infrastructure, property, and other physical assets. ",
                    "These investments create jobs and drive productivity and growth. ",
                    "Now, industry super funds are set to spend big on projects across Australia as part of a three-year investment pipeline."
                ]} />


                <div className="Icons" ref={el=>{ Section6Icons = el}}>
                    <div className="Icon Icon1" ref={el=>{ Section6Icons1 = el}}>  
                        <P Copy={["$19.5 billion investment "]}/> 
                    </div>
                    <div className="Icon Icon2" ref={el=>{ Section6Icons2 = el}}> 
                        <P Copy={["200,000+ new jobs "]}/>  
                    </div>
                </div> 



                <H2 Copy="The projects include" />

                <div className="Panels" ref={el=>{ ProjectBoxes = el}}>
                    <div className="Panel Panel1" ref={el=>{ Project1 = el}}>  
                            [Icon ]
                            <P Copy={["commercial construction"]} /> 
                    </div>
                    <div className="Panel Panel2" ref={el=>{ Project2 = el}}>  
                            [Icon ]
                            <P Copy={["redevelopments"]} /> 
                    </div>
                    <div className="Panel Panel3" ref={el=>{ Project3 = el}}>  
                            [Icon ]
                            <P Copy={["public infrastructure upgrades "]} /> 
                    </div>
                    <div className="Panel Panel4" ref={el=>{ Project4 = el}}>  
                            [Icon ]
                            <P Copy={["improved energy efficiency"]} /> 
                    </div>
                </div> 
            </section>
        </Container>
    )
}
export default Section6;    