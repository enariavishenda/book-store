import React, {Component} from 'react';


const withUsers = (View) => {

    return class extends Component {

        state = {
            email: '',
            password: '',
            errors: {}
        }

        componentDidMount() {
            this.props.fetchLogin()
            if (this.props.isAuthenticated) {
                this.props.history.push('/')
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

        componentWillReceiveProps(nextProps) {
            if (nextProps.isAuthenticated) {
                this.props.history.push('/')
            }
            if (nextProps.error) {
                this.setState({
                    errors: nextProps.error
                })
            }
        }

        render() {
            return <View users={this.props.users}
                         state={this.state}
                         inputChange={this.inputChange}
                         inputSubmit={this.inputSubmit}
            />
        }
    }
}
export default withUsers
