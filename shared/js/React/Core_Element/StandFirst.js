import React from 'react';
import Sponsor from "./SponsorLogo";

// <Sponsor {... props}/>
const StandFirst = (props)=>{
    return(
        <div className="StandfirstContainer">
            <p className="Standfirst">
                {props.SF}
            </p>
            
        </div>
    )
}
export default StandFirst;