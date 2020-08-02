import React from "react";

import Error from "../error-indicator";
import Header from "../header";
import Loading from "../loading";

import withService from '../hoc'

const App = ({book_api}) => {
    console.log(book_api.getBooks())
    return (
        <div>
            <Header />
            <Error />
            <Loading />
        </div>
    )
}
export default withService()(App)