import React, {Component} from 'react';
import Loading from "../loading";

const withBooks = (View) => {
    return class extends Component {
        componentDidMount() {
            const {book_api, booksLoaded, booksRequested} = this.props
            booksRequested()
            book_api.getBooks()
                .then((data) => {
                    booksLoaded(data)
                })
        }
        render() {
            const {books, loading} = this.props
            if (loading) {
                return <Loading/>
            }
            return <View arr={books}/>
        }
    }
}
export default withBooks
