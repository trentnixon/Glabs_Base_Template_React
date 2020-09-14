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


const Section7 = ()=>{
    let Section7 = useRef(null)
    let AnimateBoxes = useRef(null)
    let Box1  = useRef(null)
    let Box2  = useRef(null)

   let  Value1 = {val:0}, Value1Total = 510;
   let  Value2 = {val:0}, Value2Total = 351;

    useEffect(()=>{
                let tl = gsap.timeline({
                    paused: true,
                    scrollTrigger: {
                        trigger: Section7,
                        pin:'Section7',
                        id:"Section 7",
                        start: "top 60%", 
                        end: "bottom bottom",
                        scrub: 1,
                        markers: true
                    }
                }
                );

                     tl.fromTo(Box1,{scale:0.1, opacity:0}, {scale:1, opacity:1, duration:1,ease: "power2.out"})
                    .fromTo(Box2, {scale:0.1, opacity:0}, {scale:1, opacity:1, duration:1,ease: "power2.out"},"-=0.6")
                    .to(Value1,5,{val:Value1Total,roundProps:"val",onUpdate:function(){ document.getElementById("num1").innerHTML=Value1.val }},"Round")
                    .to(Value2,5,{val:Value2Total,roundProps:"val",onUpdate:function(){ document.getElementById("num2").innerHTML=Value2.val }},"Round")

    },[])
    
    return(

        <Container>
            <section className="Section Section7"   ref={el=>{ Section7 = el}}>
                <H1 Copy="Single Timeline Count Up" />
                <P Copy={["Profits generated by these investments help deliver strong returns to members, like you."]} />
                <div className="Boxes" ref={el=>{ AnimateBoxes = el}}>
                    <div className="Box Box1" ref={el=>{ Box1 = el}}>  
                        
                            <h1>$<div id="num1">{Value1.val}</div></h1>

                            $100 invested in unlisted assets 15 years ago is now worth $510 </div>

                        <div className="Box Box2" ref={el=>{ Box2 = el}}>  
                            <h1>$<div id="num2">{Value2.val}</div></h1>
                            That same $100 invested in international shares would be worth $351 now. 
                        </div>
                    </div> 

                <P Copy={[
                    "Industry super funds hold a major stake in Australia’s economic life.  They invest in Australian listed companies – holding 10% of the ASX.",
                    "They’re active in debt markets, have significant infrastructure and property holdings and invest in the wider Australian financial system. ",
                    "The super system needs a strong Australian economy to deliver for members, and the economy needs a strong super system to support its recovery."
                    ]} />

            </section>
        </Container>
    )
}
export default Section7;    