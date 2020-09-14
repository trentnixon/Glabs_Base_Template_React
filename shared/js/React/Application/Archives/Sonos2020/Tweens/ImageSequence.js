import {gsap} from 'gsap'


const SetQuote = (RefObj,Images)=>{

    const Settl = gsap.timeline();
    Images.map((quote,i)=>{ Settl.set(RefObj.current[i], {autoAlpha:0, opacity:0})  })
    return Settl;
}

const ImageMarkers = (RefObj,Img,i,PreLoad,Hold,Pause, EaseDuration)=>{
    let Marker = gsap.timeline();
    Marker.fromTo(RefObj.current[i], 
        {   
       
            opacity:0, 

        },  
        {   
            opacity:1, 
            autoAlpha:1,
      
            duration:1

        },`Image`)
        .fromTo(RefObj.current[i], 
            {   
                y:Img.fromY,
                x:Img.fromX,
            
                scale:Img.fromScale
            },  
            {   
          
                y:Img.endY,
                x:Img.endX,
                scale:Img.endScale,
                duration:Pause
    
            },`Image-=${PreLoad}`)
.to(RefObj.current[i], {opacity:0, duration:3},"+=5")
/*
    Marker.fromTo(RefObj.current[i], 
            {   
                y:Img.fromY,
                x:Img.fromX,
                opacity:0, 
                scale:Img.fromScale
            },  
            {   
                opacity:1, 
                autoAlpha:1,
                y:Img.toY,
                x:Img.toX,
                scale:Img.toScale,
                duration:EaseDuration

            },`-=${PreLoad}`)
    .to(RefObj.current[i], 
            {
                y:Img.endY,
                x:Img.endX,
                scale:Img.endScale,
                duration:Pause
            },`-=.5`)
    .to(RefObj.current[i], {opacity:0, duration:EaseDuration})
*/
    // `+=${Pause}`
    return Marker;
}


/* ******  MASTER TL HERE   */
export const Master_Image = (RefObj,Images,Duration)=>{

    //console.log(RefObj,Images,Duration)

    const Master = gsap.timeline();

        Master.add(SetQuote(RefObj,Images))

        Images.map((Img,i)=>{       
     
             let Pause;
             let PreLoad = 0;
             let Hold = 0;
             let Inout = (parseInt(Img.TimeCode) - 1);

             if(i === 0){ PreLoad = 0; Hold= 0;Inout = parseInt(Img.TimeCode) }

             if(i < Images.length){ Pause = Images[i+1] === undefined ? 5 : (parseInt(Images[i+1].TimeCode) - parseInt(Images[i].TimeCode)-1)}
            

             Master.add(ImageMarkers(RefObj,Img,i,PreLoad,Hold,Pause, 3),"Images+="+Inout);
        });

       

        let ExtendTlTime = (Duration-Master.totalDuration());    

        //console.log("Image Master Duration Pre", Duration, Master.duration(), ExtendTlTime);
        
        Master.set({}, {}, `+=${ExtendTlTime}`);
        
        //console.log("Image Master Duration Post", Duration, Master.duration());

    return Master;
}