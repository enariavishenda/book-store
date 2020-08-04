import React from "react";
import BookList from "../book-list";

const BookPage = () => {
    return (
        <main role="main" className="container">
            <div className="jumbotron text-center">
                <BookList />
            </div>
        </main>
    )
}

export default BookPage