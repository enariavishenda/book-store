import React from "react";
import Error from "../error-indicator";
import Header from "../header";
import Loading from "../loading";
import ErrorBoundry from "../error-boundry";
import {BookProvider} from "../service-context";
import BookService from "../../services/bookstore-service";

const App = () => {
    const book_api = new BookService()
    return (
        <ErrorBoundry>
            <BookProvider value={book_api}>
                <div>
                    <Header />
                    <Error />
                    <Loading />
                </div>
            </BookProvider>
        </ErrorBoundry>
    )
}

export default App