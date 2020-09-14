// GSAP
import {gsap} from 'gsap'

let BlurRatio=10

/* ******  MASTER TL HERE   */
export const Master_Reset = (RefObj, RefObj2,RefObjBG)=>{

    const Master = gsap.timeline();

    Master.to(RefObj,{opacity:0, y:-10, duration:1, ease: "power2.out"})
          .to(RefObj2,{opacity:0, y:-10, duration:1, ease: "power2.out"},"-=.8")
          .to(RefObjBG, {blur: 0,backgroundPositionX:"0%", duration:2, ease: "power2.out"})

    return Master;
}