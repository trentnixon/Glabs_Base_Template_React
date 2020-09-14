import React, { useEffect,useState } from 'react'
import CountUp from 'react-countup';
import {  useSelector } from "react-redux";
import {kFormatterSplit} from "shared/js/React/Application/DebtCalculator/actions/actions"

// useDispatch
const BudgetTotal=()=>{
    const APP = useSelector(state => state.APP);
    // Percentge bar
    const [perc,setPerc] = useState([50,50])
    // Rolling Values
    const [TotalSaving, setSaving] = useState([0,0])
    const [SavingSuffix, setSavingSuffix] = useState('')
    const [TotalSpending, setSpending] = useState([0,0])
    const [SpendingSuffix, setSpendingSuffix] = useState('')
    // Rolling Attrs
    const [Duration , setDuration] = useState(1)

    const findPerc = (save,spend)=>{
        let Total = save+spend;
        if(Total === 0 ){
            setPerc([50,50])
        }else{
            setPerc(
                [
                    ((save/Total)*100).toFixed(1),
                    ((spend/Total)*100).toFixed(1)
                ]
            )
        }
        
    }

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


    useEffect(()=>{
       
        findPerc(APP.TrackingBar.SavingsTotal, APP.TrackingBar.SpendingTotal)
        RollingValue(APP.TrackingBar.SavingsTotal, setSaving, setSavingSuffix);
        RollingValue(APP.TrackingBar.SpendingTotal, setSpending, setSpendingSuffix);
 

    },[APP.TrackingBar.SavingsTotal,APP.TrackingBar.SpendingTotal])
    
    return(
        <div className="BudgetTotal">
            <div className="Saving" style={{width:perc[0]+'%', opacity:perc[0]}}>
                <h1>Savings</h1>
                <div className="PercBar" ></div>
                <h1>$<CountUp decimals={1} start={TotalSaving[0]} end={TotalSaving[1]} duration={Duration}/>{SavingSuffix} </h1> 
            </div>
            <div className="Spending" style={{width:perc[1]+'%',opacity:perc[1]}}>
                <h1>Spending</h1>
                <div className="PercBar" ></div>
                <h1>$<CountUp decimals={1} start={TotalSpending[0]} end={TotalSpending[1]} duration={Duration}/>{SpendingSuffix} </h1>
            </div>
        </div>
    )
}
export default BudgetTotal;