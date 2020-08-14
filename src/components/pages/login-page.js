import React, {Component} from 'react';
import {connect} from "react-redux";
import compose from "../hoc/compose";
import {withUsers} from "../hoc";
import {bindActionCreators} from "redux";
import fetchLogin from "../../services/dev-server";

const LoginPage = ({users}) => {
    console.log(users)
    return (
        <div>
            <h1 className="text-center">Login Page</h1>
            {
                users.map(users =>
                    <div key={users.id}>{users.username}</div>)
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