import React from 'react';
import {connect} from "react-redux";
import compose from "../../hoc/compose";
import {withUsers} from "../../hoc";
import {bindActionCreators} from "redux";
import {fetchLogin, loginUser} from "../../../actions";
import {Link} from "react-router-dom";


import './login-page.css'

const LoginPage = ({users}, errors) => {
    const { id, username, password, icon } = users
    return (
        <div className="wrapper fadeInDown">
            <h2 className="h2">Пожалуйста войдите</h2>
                <div id="formContent">
                    <div className="fadeIn first">
                        <img className="icon"
                            src={icon}
                             key={id}
                             alt="User Icon"/>
                    </div>
                    <form onSubmit={(event) => {
                        event.preventDefault()
                    }}>
                        <input type="text"
                               id="login"
                               className="fadeIn second"
                               placeholder="login"
                               value={username}/>
                            <input
                                type="password"
                                id="password"
                                className="fadeIn third"
                                placeholder="password"
                                value={password}/>
                                <input type="submit"
                                       className="fadeIn fourth"
                                       value="Войти"/>
                    </form>
                    <div id="formFooter">
                        <Link className="underlineHover fadeIn fifth"
                              to="/register">Зарегистрироваться как новый пользователь</Link>
                    </div>
                </div>
        </div>
    )
}


const mapStateToProps = ({login: {users}, error: {errors}, auth}) => {
    return {
        users,
        errors,
        auth: auth
    }
}

const mapDispatchToProps = (dispatch) => () => {
    return  bindActionCreators({
        fetchLogin: fetchLogin,
        loginUser: loginUser
    }, dispatch)
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withUsers
)(LoginPage)