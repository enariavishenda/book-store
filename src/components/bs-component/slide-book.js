import React, {Component} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {connect} from 'react-redux';

import 'swiper/swiper.scss';
import './slide-book.css'
import {withService, compose} from '../hoc';
import {booksLoaded, booksRequested} from "../../actions/actions";
import BookListItem from "../book-list-item";
import withBooks from "../hoc/hoc-get-books";

const mapStateToProps = ({ books, loading }) => {
    return { books, loading }
}

const mapDispatchToProps = {
    booksLoaded,
    booksRequested
}

const Swipe =({arr}) => {
    return <div>
        <Swiper slidesPerView={1} spaceBetween={1}>
            {
                arr.filter((item) => item.popular > 5)
                    .map((book) => {
                        return (
                            <SwiperSlide><BookListItem book={book} /></SwiperSlide>
                        )
                    })
            }
        </Swiper>
    </div>
}

export default compose(
    withService(),
    connect(mapStateToProps, mapDispatchToProps)
)(withBooks(Swipe))

