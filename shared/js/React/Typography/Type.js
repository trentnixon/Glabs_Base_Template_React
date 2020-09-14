// examples
// <P Copy={["This is some copy"]} />

import React from 'react';


export const H1 = (props)=>{
    return(<h1 className="Header">{props.Copy}</h1>)
}

export const H2 = (props)=>{
    return(<h2 className="SubHeader">{props.Copy}</h2>)
}

export const P = (props)=>{
    return(
        <>
            {props.Copy.map((P,i)=>{
                return(
                    <p  key={i} dangerouslySetInnerHTML={ { __html: P} }></p> 
                    
                )
            })}
        </>
    )
}