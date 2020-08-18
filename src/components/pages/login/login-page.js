import React from 'react';
import {connect} from "react-redux";
import compose from "../../hoc/compose";
import {withUsers} from "../../hoc";
import {bindActionCreators} from "redux";
import {fetchLogin} from "../../../actions";

import './login-page.css'

const LoginPage = ({users}) => {
    const { id, username, password } = users
    return (
        <div>
            <h1 className="text-center">Login Page</h1>
            <div className="wrapper fadeInDown">
                <div id="formContent">
                    <div className="fadeIn first">
                        <img src={`http://localhost:3000`}
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
                        <a className="underlineHover"
                           href="#">Забыли пароль?</a>
                    </div>
                </div>
            </div>
        }
        </div>
    )
}


const mapStateToProps = ({login: {users}}) => {
    return {users}
}

const mapDispatchToProps = (dispatch) => () => {
    return  bindActionCreators({
        fetchLogin: fetchLogin,
    }, dispatch)
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withUsers
)(LoginPage)