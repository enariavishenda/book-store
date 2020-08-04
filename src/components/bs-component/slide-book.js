import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/swiper.scss'

const Swipe = () => {
    const params = { slidesPerView: 3, spaceBetween: 50 }
    return (
        <Swiper {...params}>
            <SwiperSlide>1</SwiperSlide>
            <SwiperSlide>2</SwiperSlide>
            <SwiperSlide>3</SwiperSlide>
            <SwiperSlide>4</SwiperSlide>
            <SwiperSlide>5</SwiperSlide>
            <SwiperSlide>6</SwiperSlide>
        </Swiper>
    )
}

export default Swipe