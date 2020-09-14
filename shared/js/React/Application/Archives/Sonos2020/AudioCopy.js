import React, {useEffect} from 'react';

// Structure
//import {FullWidthContainer, Container} from "../../Structure/Structure";
import {H1, H2, P} from "../../Typography/Type"

const AudioCopy=(props)=>{
    useEffect(()=>{
        //KeyWord
        //console.log("AudioCopy", props)
    },[props])

    return(
        <div className={`Copy ${props.KeyWord}`}>
            {
                    props.APP[1].map((Copy,i)=>{
                        return(
                            <P key={i} Copy={[Copy[props.KeyWord]]} />
                        )
                    })
            }
        </div>
    )
}

export default AudioCopy;