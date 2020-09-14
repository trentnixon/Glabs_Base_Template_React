// import React from "react";

const InitialState ={
	APPLICATIONREADY:false,
	APPLICATION:false,
	Meta:false,
}

const APP = (state=InitialState, action) =>{
		// eslint-disable-next-line  
		switch(action.type){
			
			
			case "STORE_META":{
				return {...state, Meta:action.payload}
					// eslint-disable-next-line 
					break
				}
				
			case "STORE_APPLICATIONREADY":{
				return {...state, APPLICATIONREADY:action.payload}
					// eslint-disable-next-line 
					break
				}
		
				case "STORE_APPLICATION":{
					return {...state, APPLICATION:action.payload}
						// eslint-disable-next-line 
						break
					}
			

	
		}
		return state;
	}
export default APP;	 