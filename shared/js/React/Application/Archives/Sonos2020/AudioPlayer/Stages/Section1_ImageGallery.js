import React from 'react';


/* ********* Image Gallery  * *********************** */
const Gallery_Stage_1 = (props)=>{
    
    const { forwardedRef } = props
   
    return(
        <div className="stage stage1" ref={el=>{ forwardedRef.Stage1=el}}>
                <div className="ImageGallery" ref={el=>{ forwardedRef.ImageGallery=el}}>
                        {
                            props.Data.map((img,i)=>{
                                return(
                                    <div className="ImgContainer" key={i} ref={el => forwardedRef.ImageContainerRef.current[i] = el}>
                                        <img className="ThisImage" src={img} ref={el => forwardedRef.ImageRef.current[i] = el}/>
                                    </div>
                                )
                            })
                        }
                </div>
                <div className="PContainer" >
                        {
                            props.Copy.map((Copy, i)=>{
                                return( <p key={i} ref={el => forwardedRef.PRef.current[i] = el} >{Copy}</p> )
                            })
                        }
                </div>
        </div>
    )
}

export default Gallery_Stage_1;