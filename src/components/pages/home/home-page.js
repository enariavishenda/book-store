import React from "react";

import {SlideList} from "../../components";

import './home-page.css'

const HomePage = () => {
    return (
        <div>
            <div className="flex jumbotron text-center">
                <h3 className="display-4 h-size">Популярное</h3>
                <span className="lead">Книги, которые изменят ваше представление о жизни</span>
                <SlideList />
            </div>
        </div>
    )
}

export default HomePage