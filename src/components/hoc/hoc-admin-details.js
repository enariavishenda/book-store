import React, {Component} from 'react';
import {number} from "prop-types";

const withAdminDetails = (View) => {

    return class extends Component {

        state = {
            title: '',
            author: '',
            genre: '',
            popular: number,
            price: number,
            coverImage: ''
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
                coverImage,
                id: this.props.match.params.id
            }
            this.props.updateBook(book, this.props.history)
        }

        render() {

            return <View
                admin={this.props.admin}
                state={this.state}
                inputChange={this.inputChange}
                updBook={this.inputSubmit}
            />
        }
    }
}

export default withAdminDetails