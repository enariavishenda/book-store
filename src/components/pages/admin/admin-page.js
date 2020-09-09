import React from "react"
import './admin-page.css'

import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import compose from "../../hoc/compose";
import withAdmin from "../../hoc/hoc-admin";
import withService from "../../hoc/hoc-service";
import {fetchBooks, createBook, updateBook, deleteBook, getBookId} from "../../../actions";



const AdminPage = ({books, addBook, updBook, delBook, byIdBook}) => {



    return (
        <div className="jumbotron text-center">
            <h3>It's Admin Page (CRUD)</h3>

        </div>
    )
}

const mapStateToProps = ({bookList: { books }}) => {
    return {
        books
    }
}


const mapDispatchToProps = (dispatch) => () => {
    return  bindActionCreators({
        fetchBook: fetchBooks,
        createBook: createBook,
        updateBook: updateBook,
        deleteBook: deleteBook,
        getBookId: getBookId
    }, dispatch)
}

export default compose(
    withService,
    connect(mapStateToProps, mapDispatchToProps),
    withAdmin
)(AdminPage)