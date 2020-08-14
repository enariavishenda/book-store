import React from "react";
import {BooksList} from "../../components";

const BookPage = () => {
    return (
        <main role="main" className="container">
            <div className="jumbotron text-center">
                <BooksList />
            </div>
        </main>
    )
}

export default BookPage