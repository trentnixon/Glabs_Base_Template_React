import React from "react"
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import store from "shared/js/React/Store/store";
import App from "shared/js/React/App";

ReactDOM.render(
    <Provider store={store}>
        <div id="Glabs">
            <App />
        </div>
    </Provider>, 
document.getElementById("app")) 