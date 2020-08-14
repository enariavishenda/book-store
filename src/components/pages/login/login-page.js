import React from 'react';
import {connect} from "react-redux";
import compose from "../../hoc/compose";
import {withUsers} from "../../hoc";
import {bindActionCreators} from "redux";
import fetchLogin from "../../../services/dev-server";

import './login-page.css'

const LoginPage = ({users}) => {
    console.log(users)
    return (
        <div>
            <h1 className="text-center">Login Page</h1>
            {
                users.map(users =><div key={users.id}>
                    {users.icon}
                    <div>{users.username}</div>
                </div>
                )
            }

            <div className="wrapper fadeInDown">
                <div id="formContent">

                    <div className="fadeIn first">
                        <img src={users.icon}
                             id="icon"
                             alt="User Icon"/>
                    </div>
                    <form>
                        <input type="text"
                               id="login"
                               className="fadeIn second"
                               placeholder="login"/>
                            <input
                                type="text"
                                id="password"
                                className="fadeIn third"
                                placeholder="password"/>
                                <input type="submit"
                                       className="fadeIn fourth"
                                       value="Войти"/>
                    </form>
                    <div id="formFooter">
                        <a className="underlineHover" href="#">Забыли пароль?</a>
                    </div>
                </div>
            </div>
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