import React from "react";
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import './header.css';

const Header = ({numItems}) => {
    return (
        <nav className="nav navbar navbar-expand-lg navbar-light bg-light ">
            <Link className="navbar-brand"
               to ="/">Book Store</Link>
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
                        <a className="nav-link dropdown-toggle"
                           data-toggle="dropdown"
                           href="#"
                           role="button"
                           aria-haspopup="true" aria-expanded="false">Книги</a>
                        <div className="dropdown-menu">
                            <Link className="dropdown-item"
                                  to="/books/fantasy/">Фантастика</Link>
                            <Link className="dropdown-item"
                                  to="/books/esoteric/">Эзотерика</Link>
                            <Link className="dropdown-item"
                                  to="/books/economic/">Экономика</Link>
                        </div>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">Дополнительная информация</Link>
                    </li>
                    <li className="nav-item basket">
                        <Link className="nav-link" to="/basket/">Корзина
                            <span> </span>
                            <span className="badge badge-primary badge-pill">{numItems}</span>
                        </Link>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2"
                           type="text"
                           placeholder="Введите название"/>
                        <button className="btn btn-secondary my-2 my-sm-0"
                                type="submit">Поиск</button>
                </form>
            </div>
        </nav>
    )
}


const mapStateToProps = ({shoppingCart: {numBasketItems}}) => {
    return {
        numItems: numBasketItems
    }
}

export default connect(mapStateToProps)(Header)