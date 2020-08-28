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
        email: this.props.users.email,
        password: this.props.users.password,
        errors: {}
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

    render () {

        const { errors } = this.state
        const { users, isAuthenticated, user } = this.props
        const { id, icon, email, password } = users

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
                               value={email}/>
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
        loginUser: loginUser
    }, dispatch)
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withUsers
)(LoginPage)