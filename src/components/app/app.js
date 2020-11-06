import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Error from "../error-indicator";
import Header from "../header";
import Loading from "../loading";
import HomePage from '../pages/home/home-page'
import AboutPage from "../pages/about/about-page";
import BasketPage from "../pages/basket/bascket-page";
import Footer from "../footer";
import BookPage from "../pages/book/book-page";
import LoginPage from "../pages/login/login-page";
import RegisterPage from "../pages/register/register-page";
import AdminPage from "../pages/admin/admin-page";

import setAuthToken from "../../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import store from "../../store";
import {logoutUser, setCurrentUser} from "../../actions";
import AdminPageDetails from "../pages/admin/admin-details";


if (localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken)
    const decoded = jwt_decode(localStorage.jwtToken)
    const {name, avatar, type} = decoded
    store.dispatch(setCurrentUser({name, avatar, type}))

    const currentTime = Date.now() / 1000
    if (decoded.exp < currentTime) {
        store.dispatch(logoutUser())
        window.location.href = '/login'
    }
}

const App = () => {
    return (
        <Router>
            <div>
                <Header/>
                <Switch>
                    <Route path="/" exact component={HomePage}/>
                    <Route path="/books/" component={BookPage}/>
                    <Route path="/books/fantasy/" exact component={Loading}/>
                    <Route path="/books/fantasy/:id" component={Error}/>
                    <Route path="/books/esoteric/" exact component={Loading}/>
                    <Route path="/books/esoteric/:id" component={Error}/>
                    <Route path="/books/economic/" exact component={Loading}/>
                    <Route path="/books/economic/:id" component={Error}/>
                    <Route path="/about" exact component={AboutPage}/>
                    <Route path="/login" exact component={LoginPage}/>
                    <Route path="/register" exact component={RegisterPage}/>
                    <Route path="/basket" exact component={BasketPage}/>
                    <Route path="/admin" exact component={(ownProps) => {
                        if (localStorage.jwtToken) {
                        if (jwt_decode(localStorage.jwtToken).type === 'admin') {
                            return <AdminPage {...ownProps} />
                        }else return <Error/>} else return <Error/>
                    }}/>
                    <Route path="/admin/:id" exact component={(ownProps) => {
                        if (localStorage.jwtToken) {
                        if (jwt_decode(localStorage.jwtToken).type === 'admin') {
                            return <AdminPageDetails {...ownProps} />
                        }else return <Error/>} else return <Error/>
                    }}/>
                    <Route render={() => {
                        return (
                            <React.Fragment>
                                <Error/>
                                <h3 className="jumbotron text-center">Page not found</h3>
                            </React.Fragment>)
                    }}/>
                </Switch>
                <Footer/>
            </div>
        </Router>
    )
}
export default App