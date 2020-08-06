import React, {Component} from 'react';
import Loading from "../loading";
import Error from "../error-indicator";

const withBooks = (View) => {

    return class extends Component {
        componentDidMount() {
            this.props.fetchBooks()
        }
        render() {
            const {books, loading, error, onAddedToCart} = this.props
            if (loading) {
                return <Loading/>
            }
            if (error) {
                return <Error />
            }
            return <View books={books} onAddedToCart={onAddedToCart}/>
        }
    }
}
export default withBooks
