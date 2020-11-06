import React from "react";

import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import compose from "../../hoc/compose";
import {updateBook} from "../../../actions";
import withAdminDetails from "../../hoc/hoc-admin-details";
import {withRouter} from 'react-router-dom'

const AdminPageDetails = ({...props}) => {
    const {state, admin, inputChange, updBook} = props

    const {title, author, genre, popular, price, coverImage} = state
    return (
        <main role="main" className="container">
            <div className="jumbotron text-center">
                <h3>Обновите данные книги</h3>
                <form className="book-list-item" onSubmit={updBook}>
                    <div className="book-cover">
                        <img src={coverImage ? coverImage : admin.coverImage}
                             alt="Здесь должно быть изображение, у вас битая ссылка"/>
                    </div>
                    <div className="book-details ">
                        <input
                            type="text"
                            placeholder="Ссылка на обложку"
                            className="form-control"
                            name="coverImage"
                            onChange={inputChange}
                            value={coverImage}
                        />
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
                            type="number"
                            min="1" max="10"
                            placeholder="Популярность из 10"
                            className="form-control"
                            name="popular"
                            onChange={inputChange}
                            value={popular}
                        />
                        <input
                            type="number"
                            min="1"
                            placeholder="Цена"
                            className="form-control"
                            name="price"
                            onChange={inputChange}
                            value={price}
                        />
                        <button
                            onClick={updBook}
                            type="submit"
                            className="btn btn-primary button-list">Обновить книгу
                        </button>
                        {admin.message && (<div className="text-danger">{admin.message}</div>)}
                    </div>
                </form>
            </div>
        </main>
    )
}

const mapStateToProps = ({admin}) => {
    return {admin}
}

const mapDispatchToProps = (dispatch) => () => {
    return bindActionCreators({
        updateBook: updateBook,
    }, dispatch)
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAdminDetails,
    withRouter
    )(AdminPageDetails)