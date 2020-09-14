import React, {useEffect, useState} from 'react';
import Categories from "./Categories"

import {Container} from "../../Structure/Structure";
import {H1, H2, P} from "../../Typography/Type"


const Home = (props)=>{

    useEffect(()=>{ },[]) 

        return(
            <div className="Home">
                
                <Categories  {... props} />
                

                <Container>
                    <section className="HomeCopy">
                        <div>
                            {
                                props.useMeta[1].map((p,i)=>{
                                    console.log(p.Class)
                                    if(p.Class === "left"){
                                        return(
                                           
                                            <p  className="BodyCopy" key={i} dangerouslySetInnerHTML={ { __html: p.Copy} }></p> 
                                        )
                                    }
                                })
                            }
                        </div>

                        <div>
                            {
                                props.useMeta[1].map((p,i)=>{
                                    console.log(p.Class)
                                    if(p.Class === "right"){
                                        return(
                                            <p  className="BodyCopy" key={i} dangerouslySetInnerHTML={ { __html: p.Copy} }></p> 
                                        )
                                    }
                                })
                            }
                        </div>


                    </section>
                    


                    
                </Container>
            </div>
        )
}
export default Home;

/**
 *   <Container>
 * <P  Copy={props.useMeta[1]}/>
                    <H1 Copy={props.useMeta[0][0].Header} />
                    <H2 Copy={props.useMeta[0][0].SubHeader} />
                </Container>
 */