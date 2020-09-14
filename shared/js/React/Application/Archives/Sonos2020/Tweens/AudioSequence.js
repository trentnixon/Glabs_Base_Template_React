// GSAP
import {gsap} from 'gsap'

let BlurRatio=10
let EaseThis ="power2.inOut"
let BgRuntime = 2;
/* ******  MASTER TL HERE   */
export const Master_Stage1 = (RefObj,RefQuote, Position, pauseFor=3)=>{

    const Master = gsap.timeline();

    Master.to(RefObj, {blur: 0, duration:BgRuntime, ease: EaseThis},"blurmove")
           .to(RefObj, {backgroundPositionX:Position, duration:BgRuntime, ease: EaseThis},"blurmove")
           .to(RefObj, {blur: BlurRatio, scale:1.5, duration:1, ease: EaseThis},"Quote1")
           .fromTo(RefQuote,{blur: BlurRatio, y:10},{opacity:1,blur: 0, y:0, duration:.5,  ease: EaseThis},"Quote1+=.5")
           .to(RefObj, {blur: 0, scale:1, duration:1, ease: EaseThis},`RemoveQuote1+=${pauseFor}`)
           .to(RefQuote,{opacity:0,y:-10, duration:.5,  ease: EaseThis},`RemoveQuote1+=${pauseFor}`)

    return Master;
}



/*


/* ******  MASTER TL HERE   
export const Master_Stage1 = (Images,Stage1Text,RefObj)=>{

    const Master = gsap.timeline();

          Master.set(RefObj.ImageGallery,{opacity:0})
                .to(RefObj.ImageGallery,{opacity:1, duration:0.5})
                .add(TweenImageGallery(Images, RefObj), "Gallery-=.5")
                .add(MoveGallery(RefObj), "Gallery-=.5")
                .add(TweenImageGalleryCopy(Stage1Text, RefObj),"Gallery-=.5")
                .add(DestroyStage(RefObj))

    return Master;
}


*/