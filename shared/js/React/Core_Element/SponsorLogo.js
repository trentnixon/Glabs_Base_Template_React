import React from 'react';

const SPONSOR = (props)=>{
    return(
        <div className="SPONSOR">
            <p>Paid for by</p>
            <a href={props.Meta.Sponsor.href} taregt="_blank">
            <img src={`<%= path %>/images/${props.Meta.Sponsor.Logo}`} alt={`Paid for by : ${props.Meta.Sponsor.Label}`}/>
            </a>
          

        </div>
    )
}
export default SPONSOR;