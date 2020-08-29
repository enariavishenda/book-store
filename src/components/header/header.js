import React, {Component} from "react";
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {logoutUser} from "../../actions";
import { withRouter } from 'react-router-dom';

import './header.css';

class Header extends Component {

    onLogout = (e) => {
        e.preventDefault()
        this.props.logoutUser(this.props.history)
    }
    render () {
        const {auth: {isAuthenticated, user}, numItems} = this.props
        const authLinks = (
            <form className="form-inline my-2 my-lg-0">
                <a href="" className="nav-link" onClick={this.onLogout}>
                    <img src={user.avatar} alt={user.name} title={user.name}
                         className="rounded-circle"
                         style={{ width: '25px', marginRight: '5px'}} />
                         Выйти
                </a>
            </form>
        )
        const guestLinks = (
            <form className="form-inline my-2 my-lg-0">
                <Link to='/login'>
                    <button className="btn btn-secondary my-2 my-sm-0"
                            type="submit">Войти</button>
                </Link>
            </form>
        )
        return (
            <nav className="nav navbar navbar-expand-lg navbar-light bg-light ">
                <Link className="navbar-brand"
                      to="/">Book Store</Link>
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
                    </ul>
                    <ul className="navbar-nav mr-right">
                        <li className="nav-item">
                            <Link className="nav-link" to="/basket/">Корзина
                                <span> </span>
                                <span className="badge badge-primary badge-pill">{numItems}</span>
                            </Link>
                        </li>
                    </ul>
                    {isAuthenticated ? authLinks : guestLinks}
                </div>
            </nav>
        )
    }
}


const mapStateToProps = ({shoppingCart: {numBasketItems} , auth}) => {
    return {
        numItems: numBasketItems,
        auth: auth
    }
}

export default connect(mapStateToProps, {logoutUser})(withRouter(Header))