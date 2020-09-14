import React, { useEffect,useState,createRef, useRef } from 'react';
import { Container} from "../../Structure/Structure";
import {gsap} from 'gsap'



let FadeInBox = gsap.timeline({ paused: true})

const Categories = (props)=>{
  
    const [Liwidth, setWidth]  = useState(document.getElementsByClassName("Box").offsetWidth)
    const CatItems = useRef(props.useCategories.map(() => createRef()))

    //let Width = useRef(null);

    const FindHeight = ()=>{
        //console.log("CatItems", CatItems)
        setWidth(CatItems.current[0].offsetWidth)
    }

    useEffect(()=>{
  
        props.useCategories.map((cat,i)=>{
            FadeInBox.add(gsap.from(CatItems.current[i],{ y:10, scale:.8, opacity:0, duration:.8, ease: "power2.inOut"}),"-=.6")
        }) 
        FadeInBox.play().delay(1)
    },[])
    useEffect(()=>{
     
        FindHeight()
        window.addEventListener('resize', FindHeight)

        return()=>{ window.removeEventListener('resize', FindHeight)}
            
        

    },[Liwidth])
    return( 
        <Container>
            <div className="Categories">
                    <ul>
                        {
                            props.useCategories.map((cat,i)=>{
                                //console.log(cat)
                                return(
                                    <li  
                                        style={{height:Liwidth+'px'}} 
                                        ref={el => CatItems.current[i] = el} 
                                        key={i} className={`Box ${cat.Category}`} onClick={()=>{props.ToggleParent(i, cat.Category)} }>
                                 
                                            <img src={`<%= path %>/images/${cat.Meta2}`} />
                                            <h2>{cat.Category}</h2>
                                            <button></button>
                                
                                    </li>
                                )
                            })
                        }
                    </ul>
            </div>
        </Container>
    )
}
export default Categories;