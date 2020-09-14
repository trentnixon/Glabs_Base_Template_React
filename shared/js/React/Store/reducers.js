import { combineReducers } from "redux";

import UI_DATA from "shared/js/React/Store/UI";
import APP   from "shared/js/React/Store/Application";

const reducers = combineReducers({
		UI:UI_DATA,
		APP:APP
	})

export default reducers;