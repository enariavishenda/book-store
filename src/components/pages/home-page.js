import React from "react";
import Swipe from "../bs-component/slide-book";

const HomePage = () => {
    return (
        <div>
            <div className="flex jumbotron text-center">
                <h3 className="display-4">Популярное</h3>
                <span className="lead">Книги, которые изменят ваше представление о жизни</span>
                <Swipe />
            </div>
        </div>
    )
}

export default HomePage