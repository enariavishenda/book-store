import React, { Component } from "react";
import BookListItem from "../book-list-item";
import { connect } from 'react-redux'

import './book-list.css'
import {withService, compose} from "../hoc";
import {booksLoaded, booksRequested} from "../../actions/actions";
import withBooks from "../hoc/hoc-get-books";

const mapStateToProps = ({ books, loading }) => {
    return { books, loading }
}

const mapDispatchToProps = {
    booksLoaded,
    booksRequested
}

const BooksMap = ({arr}) => {

    return arr.map((item) => {
        return (<li key={item.id}><BookListItem book={item}/></li>)
    })
}

export default compose(
    withService(),
    connect(mapStateToProps, mapDispatchToProps)
)(withBooks(BooksMap))