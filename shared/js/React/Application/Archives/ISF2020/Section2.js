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
            <section className="Section Section2"   ref={el=>{ Section2 = el}}>
                <H1 Copy="The impact of your choices." />
                <P Copy={["When were you born?"]} />
                
                <P Copy={["So, you’re about [AGE NOW], right?"]} />
                <P Copy={["Your retirement probably seems a long way off"]} />

                <P Copy={["Hundreds of thousands of Australians have already wiped out their Super through the government’s early access scheme during Covid-19."]} />
                <P Copy={[" 395,000 of them are under 35."]} />

            </section>
        </Container>
    )
}
export default Section2;    