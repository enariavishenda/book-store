import React from 'react';
import './register-page.css'
import compose from "../../hoc/compose";
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom';
import {bindActionCreators} from "redux";
import {registerUser} from "../../../actions";
import PropTypes from 'prop-types';
import {withRegister} from "../../hoc"

const RegisterPage = ({...props}) => {

    const {inputSubmit, inputChange, state} = props
    const {name, email, password, password_confirm, errors} = state

    return (
        <div className="wrapper fadeInDown">
            <h2 className="h2">Регистрация</h2>
            <form id="formContent" onSubmit={inputSubmit}>
                <div className="fadeIn first">
                    <input
                        type="text"
                        placeholder="Имя"
                        className="form-control"
                        name="name"
                        onChange={inputChange}
                        value={name}
                    />
                    {errors.name && (<div className="text-danger">{errors.name}</div>)}
                </div>
                <div className="fadeIn second">
                    <input
                        type="email"
                        placeholder="Email"
                        className="form-control"
                        name="email"
                        onChange={inputChange}
                        value={email}
                    />
                    {errors.email && (<div className="text-danger">{errors.email}</div>)}
                </div>
                <div className="fadeIn third">
                    <input
                        type="password"
                        placeholder="Введите пароль"
                        className="form-control"
                        name="password"
                        onChange={inputChange}
                        value={password}
                    />
                    {errors.password && (<div className="text-danger">{errors.password}</div>)}
                </div>
                <div className="fadeIn fourth">
                    <input
                        type="password"
                        placeholder="Подтвердите пароль"
                        className="form-control"
                        name="password_confirm"
                        onChange={inputChange}
                        value={password_confirm}
                    />
                    {errors.password_confirm && (<div className="text-danger">{errors.password_confirm}</div>)}
                </div>
                <div className="fadeIn fifth">
                    <input type="submit"
                           className="btn btn-primary"
                           value="Зарегистрироваться"/>
                </div>
            </form>
        </div>
    )
}

RegisterPage.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps =
    ({error, auth: {isAuthenticated, user}}) => {
        return {
            error,
            isAuthenticated,
            user
        }
    }

const mapDispatchToProps = (dispatch) => () => {
    return  bindActionCreators({
        registerUser: registerUser
    }, dispatch)
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRegister,
    withRouter
)(RegisterPage)