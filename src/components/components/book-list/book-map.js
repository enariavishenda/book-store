import BookListItem from "../book-list-item";
import React from "react";

const BooksMap = ({books, onAddedToCart}) => {
    console.log(`BookMap : `, books)
    return (
        <React.Fragment>
            <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2"
                       type="text"
                       placeholder="Введите название"/>
                <button className="btn btn-secondary my-2 my-sm-0"
                        type="submit">Поиск</button>
            </form>
            {books.map((item) => {
                return (<li key={item.id}>
                    <BookListItem
                        onAddedToCart={() => onAddedToCart(item.id)}
                        book={item}
                    /></li>)
            })}
        </React.Fragment>
        )
}
export default BooksMap;