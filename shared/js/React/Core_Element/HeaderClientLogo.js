import React,{useEffect} from 'react';

const ClientHeaderLogo=(props)=>{

    useEffect(()=>{
        console.log("Client Logo", props)
    })

    return(
        <div className="PaidforBy">
            {props.Meta[3][0].Lead}
            <a href={props.Meta[3][0].CTA} target="_blank">
                <img src="<%= path %>/images/Client-Logo.png" />
            </a>
        </div>
    )
}
export default ClientHeaderLogo;