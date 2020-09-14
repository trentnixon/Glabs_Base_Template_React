import React, {useEffect, useState} from 'react';
//import CTA from "../components/Social/CTA";
import SocialShareIcons from "./SocialShareIcons";
import {Container} from "../Structure/Structure"
const TemplateFooter = (props)=>{

    const {PartnerZoneURL,PartnerZoneLabel,PartnerZoneHeader,PartnerZoneFooter} = props.Meta[2][0];
    useEffect(()=>{
            //console.log("footer", props.Meta[2][0], props.Meta[2][0].PartnerZoneFooter)
    },[])
    return ( 
        <div id="TemplateFooter" >
                <Container>
                    <div className="share">
                        <SocialShareIcons />
                    </div>
                    <div className="meta">
                        <p>
                            {PartnerZoneFooter} <br /> 
                            <a href={PartnerZoneURL}>
                                {PartnerZoneLabel}
                            </a>
                        </p>
                    </div>
                </Container>
        </div>
        );
}

export default TemplateFooter;