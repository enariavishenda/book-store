import React from "react";
import './header.css';

const Header = () => {
    return (
        <nav className="nav navbar navbar-expand-lg navbar-light bg-light ">
            <a className="navbar-brand"
               href="#">Book Store</a>
            <button className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarColor03"
                    aria-controls="navbarColor03"
                    aria-expanded="true"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse"
                 id="navbarColor03">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-pills nav-item dropdown">
                        <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button"
                           aria-haspopup="true" aria-expanded="false">Книги</a>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">Фантастика</a>
                            <a className="dropdown-item" href="#">Эзотерика</a>
                            <a className="dropdown-item" href="#">Экономика</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Дополнительная информация</a>
                    </li>
                    <li className="nav-item basket">
                        <a className="nav-link" href="#">Корзина
                            <span> </span>
                            <span className="badge badge-primary badge-pill">4</span>
                        </a>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="text" placeholder="Введите название"/>
                        <button className="btn btn-secondary my-2 my-sm-0" type="submit">Поиск</button>
                </form>
            </div>
        </nav>
    )
}

export default Header