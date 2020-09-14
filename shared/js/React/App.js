import React, {useEffect} from 'react';
import { useSelector } from "react-redux";
import LoadingScreen from "shared/js/React/Core_Element/Loading";
import Main from "shared/js/React/Main";
import ReactGA from 'react-ga';
import { FetchData } from "shared/js/React/actions/Load";
const Content = new FetchData(); 
const AppType =['revenueMeasures','expenseMeasures','totals'];


/**
 * GA Commands 
 */
const GACode='UA-76345112-22';
ReactGA.initialize(GACode);
ReactGA.pageview(window.location.pathname + window.location.search);


Content.start(AppType);  

const App =()=>{

	const APP = useSelector(state => state.APP);
	useEffect(()=>{},[APP.APPLICATION]);
	
	if(APP.APPLICATION !== false){ return ( <Main />);}
	else{ return( <LoadingScreen/> )}

}

export default App;