import { createStore, applyMiddleware } from "redux";
//import {Provider} from "react-redux"
import reducer from "shared/js/React/Store/reducers";
//import promise from "redux-promise-middleware";
import thunk from "redux-thunk";
//const middleware = applyMiddleware(promise(), thunk);

const store = createStore(reducer, applyMiddleware(thunk));

export default store;  

