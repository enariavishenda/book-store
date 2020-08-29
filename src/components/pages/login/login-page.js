import React from 'react';
import {connect} from "react-redux";
import compose from "../../hoc/compose";
import {withUsers} from "../../hoc";
import {bindActionCreators} from "redux";
import {fetchLogin, loginUser} from "../../../actions";
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';


import './login-page.css'

const LoginPage = ({...props}) => {

    const { users, inputSubmit, inputChange, state } = props
    const { icon, id } = users
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
                <form onSubmit={inputSubmit}>
                    <input type="text"
                           id="login"
                           className="fadeIn second"
                           placeholder="Email"
                           name="email"
                           onChange={inputChange}
                           value={state.email}/>
                    {state.errors.email && (<div className="text-danger">{state.errors.email}</div>)}
                    <input
                        type="password"
                        id="password"
                        className="fadeIn third"
                        placeholder="password"
                        name="password"
                        onChange={inputChange}
                        value={state.password}/>
                    {state.errors.password && (<div className="text-danger">{state.errors.password}</div>)}
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

LoginPage.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps =
    ({login: {users}, error, auth: {isAuthenticated, user}}) => {
    return {
        users,
        error,
        isAuthenticated,
        user
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