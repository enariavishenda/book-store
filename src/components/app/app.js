import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';


import Error from "../error-indicator";
import Header from "../header";
import Loading from "../loading";
import HomePage from '../pages/home-page'
import AboutPage from "../pages/about-page";
import BasketPage from "../pages/bascket-page";
import Footer from "../footer";


const App = () => {
    return (
        <Router>
            <div>
                <Header />
                <Switch>
                    <Route path="/" exact component={HomePage}/>
                    <Route path="/books/fantasy/" exact component={Loading}/>
                    <Route path="/books/fantasy/:id" component={Error}/>
                    <Route path="/books/esoteric/" exact component={Loading}/>
                    <Route path="/books/esoteric/:id" component={Error}/>
                    <Route path="/books/economic/" exact component={Loading}/>
                    <Route path="/books/economic/:id" component={Error}/>
                    <Route path="/about" component={AboutPage}/>
                    <Route path="/basket" component={BasketPage}/>
                </Switch>
                <Footer />
            </div>
        </Router>
    )
}
export default App