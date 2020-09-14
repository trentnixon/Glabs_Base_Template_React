import React, { useEffect, useState } from 'react'
import CountUp from 'react-countup';

import {  useSelector } from "react-redux";
import {kFormatterSplit} from "shared/js/React/Application/DebtCalculator/actions/actions"
const Results=()=>{
        const APP = useSelector(state => state.APP);
        // Rolling Values
        const [TotalSaving, setSaving] = useState([0,0])
        const [SavingSuffix, setSavingSuffix] = useState('')
        const [TotalSpending, setSpending] = useState([0,0])
        const [SpendingSuffix, setSpendingSuffix] = useState('')
        // Rolling Attrs
        const [Duration , setDuration] = useState(1)
    // Share Link
        const [Share, setShare] = useState()
    
        const RollingValue = (value, Savings, Suffix)=>{

            let Saving = kFormatterSplit(value)
       
            if(typeof Saving === 'string'){
               let Split = Saving.split(",");
               Savings([TotalSaving[1], Number(Split[0])] );
               Suffix(Split[1]);
            }
            else{
               Savings([TotalSaving[1],value]);
            }
       }
   
   
       const CreateHash = ()=>{
           let Selected=[]
            let DataSet = APP.APPLICATION[0].concat(APP.APPLICATION[1])
           //console.log('CreateHash', APP.APPLICATION)
           
           DataSet.map((Measure,i)=>{
                if(Measure.state === true){ Selected.push(i)}
           })

           setShare(Selected.toString())
       }
       useEffect(()=>{
          
           RollingValue(APP.TrackingBar.SavingsTotal, setSaving, setSavingSuffix);
           RollingValue(APP.TrackingBar.SpendingTotal, setSpending, setSpendingSuffix);
           CreateHash()
       },[APP.TrackingBar.SavingsTotal,APP.TrackingBar.SpendingTotal])
    return( 
            <div className="Results">
                <h1>Here are your results</h1>
                <p>
                        Over the next year, you will raise ${<CountUp decimals={1} start={TotalSaving[0]} end={TotalSaving[1]} duration={Duration}/>}  {SavingSuffix} in additional revenue. 
                        You have also committed to spending ${<CountUp decimals={1} start={TotalSpending[0]} end={TotalSpending[1]} duration={Duration}/>}{SpendingSuffix}, which leaves you with a total balance of  
                        Tweet this, or share with <a href={`?result=${Share}`}>this link.</a>
                </p>           
            </div>
    
    )
}
export default Results;

//  <a href={share}>Share Test</a>