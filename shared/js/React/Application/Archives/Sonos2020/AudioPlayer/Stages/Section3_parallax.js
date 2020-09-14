import React from 'react';

/****  Sushi Bowl ***** */
//let SushiBowl = gsap.timeline({ paused: true, })
const Stage3_Parallax = (props)=>{

    const { forwardedRef } = props

    return(
                    <div className="stage stage3">
                            <div className="Parallax" ref={el=>{forwardedRef.Parallax=el}}>
                                <div className="layer layer-overlay" ref={el=>{forwardedRef.overlay=el}}></div>
                                <div className="layer layer-2" ref={el=>{forwardedRef.layer2=el}}></div>
                                <div className="layer layer-3" ref={el=>{forwardedRef.layer3=el}}></div>
                                <div className="layer layer-4" ref={el=>{forwardedRef.layer4=el}}></div>
                                <div className="layer layer-1" ref={el=>{forwardedRef.layer1=el}}></div>
                                <div className="layer layer-bg"></div>
                            </div>
                        </div>
    )
}

export default Stage3_Parallax;