import React, {Component} from 'react';

import Loading from "../loading";
import Error from "../error-indicator";

const withAdmin = (View) => {

    return class extends Component {

        state = {
            title: '',
            author: '',
            genre: '',
            popular: 0,
            price: 0,
            coverImage: ''
        }

        componentDidMount() {
            this.props.fetBook()
        }

        inputChange = (label) => {
            this.setState({
                [label.target.name]: label.target.value
            })
        }

        inputSubmit = (label) => {
            label.preventDefault()
            const { title, author, genre, popular, price, coverImage } = this.state
            const book = {
                title,
                author,
                genre,
                popular,
                price,
                coverImage
            }
            this.props.createBook(book)
            this.props.fetBook()
        }

        delBook = (id) => {
            console.log('Delete Book', id)
            this.props.deleteBook(id)
            this.props.fetBook()
        }
        byIdBook = (id) => {
            console.log('Get Book By Id', id)
            this.props.getBookId(id)
            this.props.history.push(`/admin/${id}`)
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
                         state = {this.state}
                         inputChange={this.inputChange}
                         addBook={this.inputSubmit}
                         delBook={this.delBook}
                         byIdBook={this.byIdBook}/>
        }
    }
}

export default withAdmin