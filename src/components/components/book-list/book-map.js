import BookListItem from "../book-list-item";
import React from "react";

const BooksMap = ({arr}) => {

    return arr.map((item) => {
        return (<li key={item.id}><BookListItem book={item}/></li>)
    })
}
export default BooksMap