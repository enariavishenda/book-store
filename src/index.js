import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/app";
import store from "./store";
import ErrorBoundry from "./components/error-boundry";
import {Provider} from "react-redux";


ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
                <App />
        </ErrorBoundry>
    </Provider>
    ,
  document.getElementById('root')
);

