import React, {useEffect,} from 'react';
import { useSelector } from "react-redux";

// Template
import {FullWidthContainer, Container} from "./Structure/Structure";
import ApplicationFooter from "./Core_Element/ApplicationFooter";
import Header from "./Core_Element/Header"
import Footer from "./Core_Element/TemplateFooter";

// Application
//import Sonos2020 from "./Application/Sonos2020/Sonos2020"

const Main = ()=>{

    const APP = useSelector(state => state.APP);

    const  preloadImage = (APP)=>
        {
            APP.map((s,i)=>{
                 let img=new Image();
                 img.src= `https://gdn-cdn.s3.amazonaws.com/embed/2020/07/westpac2020/assets${s.HeadShot}`;
            })
                  
    }

    useEffect(()=>{ console.log(APP)},[]);

    if(APP.APPLICATIONREADY === true){
        return(
            <div id="Main">

                <FullWidthContainer>
                    <Header  {... APP}/>

                        <h1>Project Files in here</h1>
               
                    <ApplicationFooter />
                 
                    <Footer {... APP}/>
                </FullWidthContainer> 
            </div>
        )
    }
    
    else{
        return(
            <div id="Main"> Loading  </div>
        )
    }
} 

export default Main