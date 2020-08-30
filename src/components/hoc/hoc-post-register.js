import React, {Component} from 'react';

const withRegister = (View) => {

    return class extends Component {

        state = {
            name: '',
            email: '',
            password: '',
            password_confirm: '',
            errors: {}
        }

        componentDidMount() {
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
                name: this.state.name,
                email: this.state.email,
                password: this.state.password,
                password_confirm: this.state.password_confirm
            }
            this.props.registerUser(user, this.props.history)
        }

        componentWillReceiveProps(nextProps) {
            if (nextProps.isAuthenticated) {
                this.props.history.push('/')
            }
            if (nextProps.error) {
                this.setState({
                    errors: nextProps.error
                })
                console.log(nextProps.error)
            }
        }

        render() {
            return <View state={this.state}
                         inputChange={this.inputChange}
                         inputSubmit={this.inputSubmit}
            />
        }
    }
}
export default withRegister
