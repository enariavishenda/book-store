import React, {Component} from 'react';

class LoginPage extends Component {

    state = {users: []}

    componentDidMount() {
        fetch('/users')
            .then(res => res.json())
            .then(users => console.log(users));
    }

    render() {
        return (
            <div>
                <h1 className="text-center">Login Page</h1>
                {
                    this.state.users.map(users =>
                    <div key={users.id}>{users.username}</div>)
                }
            </div>
        )
    }
}

export default LoginPage