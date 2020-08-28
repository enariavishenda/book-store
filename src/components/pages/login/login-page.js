import React, {Component} from 'react';
import {connect} from "react-redux";
import compose from "../../hoc/compose";
import {withUsers} from "../../hoc";
import {bindActionCreators} from "redux";
import {fetchLogin, loginUser} from "../../../actions";
import {Link} from "react-router-dom";


import './login-page.css'

class LoginPage extends Component {

    state = {
        email: '',
        password: '',
        errors: {}
    }

    inputChange = (label) => {
        this.setState({
            [label.target.name]: label.target.value
        })
    }

    inputSubmit = (label) => {
        label.preventDefault()
        const user = {
            email: this.state.email,
            password: this.state.password
        }
        this.props.loginUser(user)
    }

    componentDidMount() {
        if (this.props.isAuthenticated) {
            this.props.history.push('/')
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.isAuthenticated) {
            this.props.history.push('/')
        }
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            })
        }
    }

    render () {

        const { errors } = this.state
        const { users } = this.props
        const { id, icon } = users

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
                    <form onSubmit={this.inputSubmit}>
                        <input type="text"
                               id="login"
                               className="fadeIn second"
                               placeholder="Email"
                               onChange={this.inputChange}
                               value={this.state.email}/>
                        {errors.email && (<div className="invalid-feedback">{errors.email}</div>)}
                        <input
                            type="password"
                            id="password"
                            className="fadeIn third"
                            placeholder="password"
                            onChange={this.inputChange}
                            value={this.state.password}/>
                        {errors.password && (<div className="invalid-feedback">{errors.password}</div>)}
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
}


const mapStateToProps =
    ({login: {users}, error: {errors}, auth: {isAuthenticated, user}}) => {
    return {
        users,
        errors,
        isAuthenticated,
        user
    }
}

const mapDispatchToProps = (dispatch) => () => {
    return  bindActionCreators({
        fetchLogin: fetchLogin,
        loginUser: loginUser()
    }, dispatch)
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withUsers
)(LoginPage)