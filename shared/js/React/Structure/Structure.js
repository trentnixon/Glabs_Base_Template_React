import React from 'react';


export const Container = (props)=>{
    return(
        <div className="GlabsContainer">
            <div className="ResponsiveContainer">
                <div className="inner">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export const FullWidthContainer = (props)=>{
    return(
        <div className="GlabsContainer">
            <div className="FullWidth">
                <div className="inner">
                    {props.children}
                </div>
            </div>
        </div> 
    )
}


export const Footer = (props)=>{
    return(
        <div>
            Footer
        </div>
    )
}