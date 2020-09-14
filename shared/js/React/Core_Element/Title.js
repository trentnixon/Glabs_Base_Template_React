import React, {useEffect, useState} from 'react';

const Titles = (props)=>{
    let [BottomMargin, SetMargin ] = useState(0);
 
    useEffect(() => {
  
    //  let ReturnHeight = document.getElementById('MainTitle').clientHeight;
      //console.log("ReturnHeight", ReturnHeight)
    //  ReturnHeight =  2* Math.floor(ReturnHeight/2) - 2; 
    //  SetMargin(Math.floor(ReturnHeight/2));
  
    }, [])

    return(
        <div id="MainTitle">
            <div id="TitleContainer" >
                <div className="Tab">
                    <h1 >{props.SubTitle}</h1>
                </div>
               
                <div  className="Title-Container" style={{marginBottom:-BottomMargin+"px"}}>
                    <h1 className="">{props.Title}</h1>
                    <h2 >{props.SubTitle}</h2>
                </div>
            </div>
        </div>
    )
}
export default Titles;

//   <h1 className="tracking-in-expand">{props.SubHeader}</h1>
// {marginBottom:-BottomMargin+"px"}