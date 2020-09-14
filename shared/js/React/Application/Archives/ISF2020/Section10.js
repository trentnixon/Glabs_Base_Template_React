import React, {useEffect, useState, useRef} from 'react';

// Actions
import {GA} from "../../actions/ga"


// Structure
import {Container} from "../../Structure/Structure";
import {H1, H2, P} from "../../Typography/Type"

const Section2 = ()=>{
    let Section2 = useRef(null)

    useEffect(()=>{
    
    },[])
    
    return(

        <Container>
            <section className="Section Section10"   ref={el=>{ Section2 = el}}>
                <H1 Copy="STATIC" />
                <H1 Copy="We can’t afford to mess with Super" />
                
                <P Copy={["Early withdrawals and a superannuation freeze will make everyone’s retirement harder. To deliver strong returns to members, Super needs to be able to make diverse investments.",
            "If it can’t, the Australian economy will suffer: fewer jobs created, less direct budget benefit and worsening infrastructure. In a time of crisis, Australia can’t afford that risk."]} />
             

            </section>
        </Container>
    )
}
export default Section2;    