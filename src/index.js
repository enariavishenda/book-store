import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/app";
import BookService from "./services/bookstore-service";
import store from "./store";
import ErrorBoundry from "./components/error-boundry";
import {BookProvider} from "./components/service-context";
import {Provider} from "react-redux";
import setAuthToken from "./utils/setAuthToken";
import jwt_decode from "jwt-decode";
import {logoutUser, setCurrentUser} from "./actions";

const book_api = new BookService()

if (localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken)
    const decoded = jwt_decode(localStorage.jwtToken)
    store.dispatch(setCurrentUser(decoded))

    const currentTime = (Date.now()/1000)
    if (decoded.exp < currentTime) {
        store.dispatch(logoutUser())
        window.location.href= '/login'
    }
}

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <BookProvider value={book_api}>
                <App />
            </BookProvider>
        </ErrorBoundry>
    </Provider>
    ,
  document.getElementById('root')
);

