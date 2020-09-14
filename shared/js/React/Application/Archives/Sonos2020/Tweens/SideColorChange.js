// GSAP
import {gsap} from 'gsap'



/* ******  MASTER TL HERE   */
export const SideColorChange = (RefObj, Color)=>{

    const Master = gsap.timeline();

    Master.to(RefObj,{backgroundColor:Color,duration:5, ease: "power2.out"})

    return Master;
}