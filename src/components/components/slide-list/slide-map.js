import {Swiper, SwiperSlide} from "swiper/react";
import BookListItem from "../book-list-item";
import React from "react";

import 'swiper/swiper.scss';
import './slide-map.css'

const SwipeMap =({books, onAddedToCart}) => {
    return <div>
        <Swiper slidesPerView={1} spaceBetween={1}>
            {
                books.filter((item) => item.popular > 5)
                    .map((book) => {
                        return (
                            <SwiperSlide key={book.id}>
                                <BookListItem onAddedToCart={() => onAddedToCart(book.id)}
                                    book={book} />
                            </SwiperSlide>
                        )
                    })
            }
        </Swiper>
    </div>
}
export default SwipeMap