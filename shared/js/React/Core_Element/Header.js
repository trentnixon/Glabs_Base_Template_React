import React, {useEffect, useState} from 'react';
import Titles from "./Title";

// import {gsap} from 'gsap'

import ClientHeader from "./HeaderClientLogo";

const CampaignHeader = (props)=>{

    const { Header, SubHeader, HeaderImage } = props.Meta[0][0]
    const [image, setImage] = useState();
    let [BottomMargin, SetMargin ] = useState(0);
    //   
    const HeaderStyles = {
        backgroundImage: `url(<%= path %>/images/Header2.jpg)`,
        marginBottom:BottomMargin,
        backgroundSize:'cover',
        backgroundPosition: 'center center'
      };

      
    useEffect(()=>{
        //console.log("Header", Header, props.Meta)
       // let ReturnHeight = Math.floor(document.getElementById('MainTitle').clientHeight*1.2);
       // SetMargin(Math.floor(ReturnHeight)) 
       // setImage(props.Meta.Header)
    })

    useEffect(()=>{})

    return(
        <div id="Header" style={HeaderStyles}>
            <ClientHeader {...props}/>
            <div className="FlexHeader">
                <div id="BG_Image_Container"  style={HeaderStyles}></div>       
                <Titles Title={Header} SubTitle={SubHeader}/>
            </div>
        </div>
    )
}
export default CampaignHeader;