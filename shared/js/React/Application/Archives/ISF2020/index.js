import React, {useEffect, useState} from 'react';

// Actions
import {GA} from "../../actions/ga"
// Structure
import {Container} from "../../Structure/Structure";
import {H1, H2, P} from "../../Typography/Type"
// Elements

// Sections
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Section7 from "./Section7";
import Section8 from "./Section8";
import Section9 from "./Section9";
import Section10 from "./Section10";


const ISF = ()=>{
    return(
        <div className="ISF">
            <Container>
                <Section1 />
                <Section2 />
                <Section3 />
                <Section4 />
                <Section5 />
                <Section6 />
                <Section7 />
                <Section8 />
                <Section9 />
                <Section10 />
            </Container>
        </div>
    )
}
export default ISF;