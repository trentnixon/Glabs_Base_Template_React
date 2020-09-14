import {gsap} from 'gsap'


const SetQuote = (RefObj,Quotes)=>{

    const Settl = gsap.timeline();
    Quotes.map((quote,i)=>{ Settl.set(RefObj.current[i], {autoAlpha:0, opacity:0})  })
    return Settl;
}

/*
const QuoteMarkers = (RefObj,i,PreLoad,Hold,Pause, EaseDuration)=>{
    let Marker = gsap.timeline();
    Marker
    .fromTo(RefObj.current[i], {y:400, scale:0.1, skewY:0, skewX:-50},  {opacity:.3, scale:.3,autoAlpha:.3,y:100,skewY:0, skewX:-20,  duration:EaseDuration},`-=${PreLoad}`)
    .to(RefObj.current[i], {opacity:1, scale:1,autoAlpha:1,y:-50, skewY:0, skewX:0,duration:EaseDuration},`+=${Hold}`)
    .to(RefObj.current[i], {opacity:0, y:0, scale:5, duration:EaseDuration},`+=${Pause}`)

    return Marker;
}
*/

const QuoteMarkers = (RefObj,i)=>{
    
    let Marker = gsap.timeline();
    let pause = 7
    
    // width
    //console.log(RefObj.current);
    Marker
    .fromTo(RefObj.current[i], {opacity:1, },  { duration:1, ease: "power2.inOut"},"-=.3")
    .fromTo(RefObj.current[i].firstChild, {height:0, y:100,padding:'0rem 0rem',opacity:0 },  {opacity:1, y:0,padding:'.5rem 1rem',height:'auto', duration:1.5,ease: "power2.inOut"})
    .fromTo(RefObj.current[i].lastChild, {height:0,y:100, padding:'0rem 0rem', opacity:0 },  {opacity:1, y:0,padding:'.5rem 1rem',height:'auto',duration:1.5,ease: "power2.inOut"},"-=1.2")
    
    .to(RefObj.current[i], { duration:1, ease: "power2.inOut"},`Close+=${pause}`)
    .to(RefObj.current[i].firstChild, {height:0, opacity:0, duration:.9,ease: "power2.inOut" },`Close+=${pause}`)
    .to(RefObj.current[i].lastChild, {height:0, opacity:0 , duration:.9,ease: "power2.inOut"},`Close+=${pause}`)


    return Marker;
}
 //.to(RefObj.current[i], {scale:1,autoAlpha:1,y:0, duration:EaseDuration},`+=${Hold}`)

/* ******  MASTER TL HERE   */
export const Master_Quote = (RefObj,Quotes,Duration)=>{

      const Master = gsap.timeline();

       // Master.add(SetQuote(RefObj,Quotes))

        Quotes.map((quote,i)=>{ Master.add(QuoteMarkers(RefObj,i),"Quotes+="+quote.In); });

           let ExtendTlTime = (Duration-Master.totalDuration());    
           Master.set({}, {}, `+=${ExtendTlTime}`);

    return Master;
}