import React, { Component } from "react";
import BookListItem from "../book-list-item";
import { connect } from 'react-redux'

import './book-list.css'
import {withService, compose} from "../hoc";
import {booksLoaded} from "../../actions/actions";

class BookList extends Component {

    componentDidMount() {
        const { book_api } = this.props
        const data = book_api.getBooks() //получение объектов массива из сервиса
        this.props.booksLoaded(data) //донести действие в Store
    }

    render() {
        const { books } = this.props
        return (
            <ul>
                {
                    books.map((book) => {
                        return (
                            <li key={book.id}><BookListItem book={book} /></li>
                        )
                    })
                }
            </ul>
        )
    }
}

const mapStateToProps = ({ books }) => {
    return { books }
}

const mapDispatchToProps = {booksLoaded}

export default compose(
    withService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookList)