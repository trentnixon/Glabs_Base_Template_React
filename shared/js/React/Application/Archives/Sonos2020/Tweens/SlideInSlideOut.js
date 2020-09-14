// GSAP
import {gsap} from 'gsap'

let BlurRatio=10
let EaseThis ="power2.inOut"
let PanDuration = 1.5;
/* ******  MASTER TL HERE   */

export const SlideInOut = (RefObj,RefObj2, Class)=>{

    const Master = gsap.timeline();

    Master.fromTo(RefObj2,{yPercent:100}, {yPercent:0,duration:PanDuration, ease:EaseThis},"Motion1")
    .fromTo(Class+' h2.title1',{yPercent:10, opacity:0}, {yPercent:0,opacity:1, duration:PanDuration, ease:EaseThis},"+=1.5")
    .fromTo(Class+' h2.title2',{yPercent:10, opacity:0}, {yPercent:0,opacity:1, duration:PanDuration, ease:EaseThis},"+=1.5")
    .fromTo(Class+' h2.title3',{yPercent:10, opacity:0}, {yPercent:0,opacity:1, duration:PanDuration, ease:EaseThis},"+=1.5")
    .to(RefObj,{yPercent:-100 ,duration:PanDuration, ease:EaseThis},"Motion1") 

    return Master;
}


export const SlideInOutQuestion = (RefObj,RefObj2)=>{

    const Master = gsap.timeline();

    Master.fromTo(RefObj2,{xPercent:100}, {xPercent:0,duration:PanDuration, ease:EaseThis},"Motion1")
    .to(RefObj,{xPercent:-100 ,duration:PanDuration, ease:EaseThis},"Motion1") 

    return Master;
}



