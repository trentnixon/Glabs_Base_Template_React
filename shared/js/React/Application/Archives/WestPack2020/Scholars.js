import React, {useEffect, useState,useRef, createRef } from 'react';

import {Container} from "../../Structure/Structure";
import {H1, H2, P} from "../../Typography/Type"

import {gsap} from 'gsap'

import {GA} from "../../actions/ga"

const tl = gsap.timeline({paused:true, autoAlpha:0});

const Scholars = (props)=>{
  
    const [ScholarSelected, setScholarSelected] = useState(false)
    const [SelectedCategories, setCategories] = useState(false)
    let Profile = useRef(null)
    const ScholarItems = useRef(Object.keys(SelectedCategories).map(() => createRef()))

    const handleScholar = (id)=>{


        setCategories(props.SelectedScholars[id])
        GA('Application Click','Scholar Selected',props.SelectedScholars[id].Name)
        props.useScholars.map((s,i)=>{
            if(s.Name === props.SelectedScholars[id].Name){
                return setScholarSelected(s)
            }
        })

    }

    const Gsap = ()=>{

        ScholarItems.current.map((c,i)=>{
            tl.add(gsap.from(ScholarItems.current[i],{ y:-10, scale:.8, opacity:0, duration:.8, ease: "power2.inOut"}),"-=.7")
        })
       
        tl.play();
    }

    const FindScholar = (Name, cat)=>{

        let ScholarItem = props.useScholars.map((s,i)=>{
            if(s.Name === Name){
                return <DisplayScholarList key={i} Categories={cat} scholar = {s}/>
            } 
        })
        return ScholarItem;
    }

    useEffect(()=>{ Gsap(); },[])


    useEffect(()=>{
        let Videohead = document.getElementsByClassName("Gradient")

        if(ScholarSelected === false){
            //window.scrollTo({ top: 0,behavior: 'smooth'});
            window.scrollTo({ top: -50  , behavior: 'smooth'});
        }
        else{
           
            window.scrollTo({ top: (Videohead[0].offsetHeight-50)  , behavior: 'smooth'});
        }
        
        


    },[ScholarSelected])


    if(ScholarSelected !== false){
        return(
            <Container>
                <div ref={el => Profile = el} className="Profile" id="Profile">
                 <button className="BackToList" onClick={()=>{ setScholarSelected(false)}}>Scholar List</button>
              
                    <div className="Image">
                        <img src={`https://gdn-cdn.s3.amazonaws.com/embed/2020/07/westpac2020/assets${ScholarSelected.HeadShot}`} />
                        <div className="ScholarCategoryContainer">
                            {
                            
                                Object.keys(SelectedCategories).map((c,i)=>{
                                    console.log(SelectedCategories, c)
                                    if(SelectedCategories[c] === '1'){
                                        console.log(c)
                                        return(
                                            <div  className={`ParentListIcon ${c}`}></div>
                                        )
                                    }
                                })
                            }
                        </div>
                    </div>

                    <div className="Details">
                        <h1>{ScholarSelected.Name}</h1>
                        <h2>{ScholarSelected.Tagline}</h2>
                        <p>{ScholarSelected.Copy}</p>

                        <div className="Meta">
                            <h2><strong>Scholarship : </strong> {ScholarSelected.SubHeader}</h2>
                            <h2><strong>Completed : </strong>{ScholarSelected.Date}</h2>
                        </div>
                       
                        <a href={ScholarSelected.CTA1} className="ScholarLinks" target="_blank">View Alumni profile</a>
                    </div>
                </div>
            </Container>
        )
    }
    else{
        return(
            <Container>
                <div className="Selected">
                    <ul className="ScholarsList">
                            {
                                props.SelectedScholars.map((cat,i)=>{
                                    return(
                                        <li key={i} ref={el => ScholarItems.current[i] = el}  onClick={()=>{handleScholar(i)}}>
                                            {FindScholar(cat.Name, cat)}
                                        </li>
                                    )
                                })
                            }
                    </ul>
                </div>
            </Container>
        )
    }
}

export default Scholars;



const DisplayScholarList  = (props)=>{
   
    return(
        <>
                <img src={`https://gdn-cdn.s3.amazonaws.com/embed/2020/07/westpac2020/assets${props.scholar.HeadShot}`} />
                <div className="ScholarCategoryContainer">
                {
                    Object.keys(props.Categories).map((c,i)=>{
                        
                        if(props.Categories[c] === '1'){
                            return(
                                <div key={i}  className={`ParentListIcon ${c}`}></div>
                            )
                        }
                    })
                }
                </div>
              
                <H2 Copy={props.scholar.Tagline} />
                
        </>
    )
}
//   <H2 Copy={props.scholar.Name} />