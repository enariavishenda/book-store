import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/app";
import BookService from "./services/bookstore-service";
import DevBookService from "./services/dev-server-service";
import store from "./store";
import ErrorBoundry from "./components/error-boundry";
import {BookProvider} from "./components/service-context";
import {Provider} from "react-redux";

const book_api = new DevBookService()

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

