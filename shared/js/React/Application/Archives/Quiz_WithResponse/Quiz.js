import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux";
import Question from "./Questions";
import Response from "./Responses";
const Quiz = (props)=>{
  
    useEffect(()=>{
        //console.log("Questions", props.AnsweredTally)
    }, [props.AnsweredTally])
   
    return(
        <div className="QuizContainer">
            {
                props.Quiz.map((question, Int)=>{
                                return(
                                    <div key={Int} className="QuestionContainer">
                                            <img src={`<%= path %>/images/${question.image}`} />
                                            <h1>{question.Question}</h1>
                                            <div className="AnswersContainer">
                                                {
                                                    question.Answers.map((Answer,i)=>{
                                                        return( 
                                                            <Question QuestionInt={Int} AnswerPosition={i} key={i} Answer={Answer} />
                                                        )
                                                    })
                                                }
                                            </div>
                                            <Response {... question} State={props.AnsweredTally[Int]} Int={Int} />
                                    </div>    
                                )   
                    }) 
            }
        </div>
    )
}
export default Quiz 