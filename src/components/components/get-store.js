import { connect } from 'react-redux'

import {fetchBooks, bookAddedToCart} from "../../actions";
import {compose, withService, withBooks} from "../hoc";
import {BooksMap, SwipeMap} from "./index";
import {bindActionCreators} from "redux";

const mapStateToProps = ({bookList: { books, loading, error }}) => {
    return { books, loading, error }
}

const mapDispatchToProps = (dispatch, ownProps) => () => {
    const {book_api} = ownProps
    return  bindActionCreators({
        fetchBooks: fetchBooks(book_api),
        onAddedToCart: bookAddedToCart
        }, dispatch)
    }

const BooksList = compose(
    withService(),
    connect(mapStateToProps, mapDispatchToProps),
    withBooks
)(BooksMap)

const SlideList = compose(
    withService(),
    connect(mapStateToProps, mapDispatchToProps),
    withBooks
)(SwipeMap)

export {
    BooksList,
    SlideList
}
