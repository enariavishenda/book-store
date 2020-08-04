import React, {Component} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {connect} from 'react-redux';

import 'swiper/swiper.scss';
import './slide-book.css'
import {withService, compose} from '../hoc';
import {booksLoaded} from "../../actions/actions";
import BookListItem from "../book-list-item";

class Swipe extends Component { //Нужно переделать в HOC

    componentDidMount() {
        const { book_api } = this.props
        const data = book_api.getBooks()
        this.props.booksLoaded(data)
    }

    render () {
        const { books } = this.props
        return (
            <div>
                <Swiper slidesPerView={1} spaceBetween={1}>
                    {
                        books.filter((item) => item.popular > 5)
                            .map((book) => {
                            return (
                                <SwiperSlide><BookListItem book={book} /></SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        )
    }
}

const mapStateToProps = ({ books }) => {
    return { books }
}

const mapDispatchToProps = {booksLoaded}

export default compose(
    withService(),
    connect(mapStateToProps, mapDispatchToProps)
)(Swipe)

