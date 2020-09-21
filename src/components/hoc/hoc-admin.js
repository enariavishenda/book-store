import React, {Component} from 'react';
import Loading from "../loading";
import Error from "../error-indicator";

const withAdmin = (View) => {

    return class extends Component {

        state = {
            title: 'test',
            author: 'test',
            genre: 'test',
            popular: 10,
            price: 100,
            coverImage: 'https://img.pngio.com/happy-pepe-transparent-png-stickpng-pepe-transparent-1280_1280.png'
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

        updBook = (id) => {
            console.log('Update Book', id)
        }
        delBook = (id) => {
            console.log('Delete Book', id)
            this.props.deleteBook(id)
            this.props.fetBook()
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
                         state = {this.state}
                         inputChange={this.inputChange}
                         addBook={this.inputSubmit}
                         updBook={this.updBook}
                         delBook={this.delBook}
                         byIdBook={this.byIdBook}/>
        }
    }
}

export default withAdmin