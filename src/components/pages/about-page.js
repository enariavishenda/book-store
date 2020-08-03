import React from "react";
import './about-page.css'
import logo from './about-page.png'

const AboutPage = () => {
    return (
        <div className="about shadow-sm  bg-white rounded">
            <div className="card border-light mb-3">
                <div className="card-header"></div>
                <div className="card-body">
                    <img className="logo" src={logo} alt={logo}/>
                    <h4 className="card-title">Мы продаем только качественную литературу</h4>
                    <span className="card-text">Для дополнительной информацией свяжитесь с нами по телефону указанному в контактах сайта или <a href="mailto:mattco@mail.ru">по почте.</a></span>
                </div>
            </div>
        </div>
    )
}
export default AboutPage