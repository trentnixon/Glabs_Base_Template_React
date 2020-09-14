import React, {useRef, useEffect} from 'react';

// Actions
import {gsap} from 'gsap'


// Structure
import {Container} from "../../Structure/Structure";
import {H1, H2, P} from "../../Typography/Type"


const Section1 = ()=>{

    let Section1 = useRef(null)

   const Content = {
    "Title":"By the numbers: Why we can’t afford to mess with Super",
    "Copy":["In a time of crisis, we’re all making important decisions about our super. But can we really afford the long-term impacts? We break it down by the numbers."]
   }

    useEffect(()=>{
        //gsap.from(Section1,{opacity:0, duration:2})
        gsap.from('.Section1 h1',{opacity:0, y:-10, duration:2})
        gsap.from('.Section1 p',{opacity:0, y:20, duration:2.5})
    },[])
    return(
            <Container>
                 <section className="Section Section1"   ref={el=>{ Section1 = el}}>
                    <H1 Copy="OnLoad" />
                    <H1 Copy={Content.Title} />
                    <P Copy={Content.Copy} />
                </section>
            </Container>
    )
}
export default Section1;