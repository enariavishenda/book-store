import React from "react";

import './admin-list-item.css';

const AdminBookList = ({books, delBook, byIdBook, addBook, updBook, state, inputChange}) => {

    const {title, author, genre, popular, price, coverImage} = state

    return (<React.Fragment>
            <form onSubmit={addBook}>
                <input
                    type="text"
                    placeholder="Название книги"
                    className="form-control"
                    name="title"
                    onChange={inputChange}
                    value={title}
                />
                <input
                    type="text"
                    placeholder="Автор произведения"
                    className="form-control"
                    name="author"
                    onChange={inputChange}
                    value={author}
                />
                <input
                    type="text"
                    placeholder="Жанр"
                    className="form-control"
                    name="genre"
                    onChange={inputChange}
                    value={genre}
                />
                <input
                    type="text"
                    placeholder="Популярность из 10"
                    className="form-control"
                    name="popular"
                    onChange={inputChange}
                    value={popular}
                />
                <input
                    type="text"
                    placeholder="Цена"
                    className="form-control"
                    name="price"
                    onChange={inputChange}
                    value={price}
                />
                <input
                    type="text"
                    placeholder="Ссылка на обложку"
                    className="form-control"
                    name="coverImage"
                    onChange={inputChange}
                    value={coverImage}
                />
                <button
                    onClick={addBook}
                    type="submit"
                    className="btn btn-primary">Добавить книгу
                </button>
            </form>

        {books.map((item) => {
                const {title, author, price, coverImage} = item
                return (
                    <li key={item.id} className="book-li">
                        <div className="book-list-item">
                            <div className="book-cover">
                                <img src={coverImage} alt="cover"/>
                            </div>
                            <div className="book-details">
                                <a href="#" className="book-title">{title}</a>
                                <div className="book-author">{author}</div>
                                <div className="book-price">${price}</div>
                                <div className="button-list">
                                    <button
                                        onClick={() => delBook(item.id)}
                                        className="btn btn-danger">Удалить
                                    </button>
                                    <button
                                        onClick={() => updBook(item.id)}
                                        className="btn btn-secondary">Изменить
                                    </button>
                                    <button
                                        onClick={() => byIdBook(item.id)}
                                        className="btn btn-info">Книга по элементу
                                    </button>
                                </div>

                            </div>
                        </div>
                    </li>
                )
            })
        }
        </React.Fragment>
    )
}

export default AdminBookList