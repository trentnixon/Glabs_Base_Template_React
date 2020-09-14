import React, { useEffect, useState } from 'react'
// import { useSelector } from "react-redux";
// import ResetBtn from "./ResetQuiz";

const Results = (props)=>{
    const [Review, setReview] = useState(null)

    useEffect(()=>{

        //if(props.ResultBreakdown !== undefined)
        //console.log("RESULTS", props,  typeof props.Results);
        //console.log("props.AnsweredTally", props.AnsweredTally.filter(Boolean).length);
       
        props.Results.map((b,i)=>{
            //console.log("b",b.score, b.score.indexOf(props.AnsweredTally.filter(Boolean).length))
            if(b.score.indexOf(props.AnsweredTally.filter(Boolean).length) != -1)
                {   
                    setReview(b.Review)
                }
        })  
    })

    return(
        <div className="QuizContainer QuizReviewContainer">
            <div className="QuizReview">
                <h2> {props.AnsweredTally.filter(Boolean).length} / {props.AnsweredTally.length}</h2>
                <p>{Review}</p>
            </div>
        </div>
    )
}

export default Results 
//   <ResetBtn />