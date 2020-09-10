import React, {Component} from 'react';
import Loading from "../loading";
import Error from "../error-indicator";

const withAdmin = (View) => {

    return class extends Component {

        componentDidMount() {
            this.props.fetBook()
        }

        addBook = (id) => {
            console.log('Add Book', id)
        }
        updBook = (id) => {
            console.log('Update Book', id)
        }
        delBook = (id) => {
            console.log('Delete Book', id)
        }
        byIdBook = (id) => {
            console.log('Get Book By Id', id)
        }

        render() {
            const {books, loading, error} = this.props
            if (loading) {
                return <Loading/>
            }
            if (error) {
                return <Error />
            }
            return <View books={books}
                         addBook={this.addBook}
                         updBook={this.updBook}
                         delBook={this.delBook}
                         byIdBook={this.byIdBook}/>
        }
    }
}

export default withAdmin