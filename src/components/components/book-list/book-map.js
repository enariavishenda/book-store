import BookListItem from "../book-list-item";
import React from "react";

const BooksMap = ({books, onAddedToCart}) => {

    return books.map((item) => {
        return (<li key={item.id}>
            <BookListItem
                onAddedToCart={() => onAddedToCart(item.id)}
                book={item}
            /></li>)
    })
}
export default BooksMap