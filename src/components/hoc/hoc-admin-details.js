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

        componentDidUpdate(prevProps, prevState, snapshot) {
            console.log('пропсы',this.props)
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
            // this.props.createBook(book)
            console.log(book)
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