import React from "react"
import './admin-page.css'

import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import { withRouter } from 'react-router-dom'
import compose from "../../hoc/compose";
import withAdmin from "../../hoc/hoc-admin";
import withService from "../../hoc/hoc-service";
import {fetchBooks, createBook, updateBook, deleteBook, getBookId} from "../../../actions";
import {AdminBookList} from "../../components";


const AdminPage = ({...props}) => {

    const {books, addBook, delBook, byIdBook, state, inputChange} = props


    return (
        <main role="main" className="container">
            <div className="jumbotron text-center">
                <h3>It's Admin Page (CRUD)</h3>
                <AdminBookList books={books}
                               state={state}
                               inputChange={inputChange}
                               delBook={delBook}
                               addBook={addBook}
                               byIdBook={byIdBook}
                />
            </div>
        </main>
    )
}

const mapStateToProps = ({bookList: { books, error, loading} }) => {
    return {
        books,
        error,
        loading
    }
}

const mapDispatchToProps = (dispatch, ownProps) => () => {
    const {book_api} = ownProps
    return  bindActionCreators({
        fetBook: fetchBooks(book_api),
        createBook: createBook,
        updateBook: updateBook,
        deleteBook: deleteBook,
        getBookId: getBookId
    }, dispatch)
}

export default compose(
    withService(),
    connect(mapStateToProps, mapDispatchToProps),
    withAdmin
)(withRouter(AdminPage))