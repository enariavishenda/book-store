import React, {Component} from 'react';
import Loading from "../loading";
import Error from "../error-indicator";

const withAdmin = (View) => {

    return class extends Component {

        componentDidMount() {
            this.props.fetBook()
        }


        render() {
            const {books, loading, error, addBook, updBook, delBook, byIdBook} = this.props
            if (loading) {
                return <Loading/>
            }
            if (error) {
                return <Error />
            }
            return <View books={books}
                         addBook={addBook}
                         updBook={updBook}
                         delBook={delBook}
                         byIdBook={byIdBook}/>
        }
    }
}

export default withAdmin