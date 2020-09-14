import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux";
import Measures from "shared/js/React/Application/DebtCalculator/js/Stateful/Measures"
import BudgetTotal from  "shared/js/React/Application/DebtCalculator/js/Stateful/BudgetBarTotals";
import StandFirst from "shared/js/React/Application/DebtCalculator/js/Stateless/StandFirst"
import Result from "shared/js/React/Application/DebtCalculator/js/Stateful/Results"
// Path  :  shared/js/React/Application/DebtCalculator/

import { handleClick } from "shared/js/React/Application/DebtCalculator/actions/handle";

const BudgetCalculator = ()=>{

  const APP = useSelector(state => state.APP);

  // TODO : this is poor, but it works :)
  const FakeClick = (i,POSITION,CATEGORY)=>{ setTimeout(function(){ handleClick(POSITION,CATEGORY)}, 100*i )}


  const AssessResult = ()=>{
    if(APP.SharedResult.length > 0){
      // Results to Array
      let LoadResult = APP.SharedResult.split(',')
      // Map Results
      LoadResult.map((int,i)=>{
          if(int < APP.APPLICATION[0].length){ 
            FakeClick(i, int, 0)}
          else{
            let NextInt = int - APP.APPLICATION[0].length
            FakeClick(i ,NextInt, 1)
          }
      })
    }
  }

  useEffect(()=>{
    // SharedResult
    AssessResult()
  },[APP.SharedResult]);

  return(
      <div className="Application">
          <div className="StickTo">
            <BudgetTotal />
            <StandFirst />
            <Measures />
          </div>
            <Result />
      </div> 
  )
}

export default  BudgetCalculator  