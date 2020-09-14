import React from 'react';

const ProgressImageReveal = ({Images,forwardRef})=>{
    
    const Path="https://gdn-cdn.s3.amazonaws.com/embed/2020/08/Sonos2020/assets/images/AudioTimeline/";
    
    return(
        <div className="AudioBGImage">
            {
                 Images.map((img,i)=>{
                    return(
                        <div  style={{backgroundImage:`url(${Path+img.Img})`}} key={i} ref={el => forwardRef.current[i] = el} className="BgImage"></div>
                    )
                })
            }
        </div>
    )
}

export default ProgressImageReveal;