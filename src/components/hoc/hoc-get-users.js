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
            console.log('Did Mount hoc-get-users')
        }

        inputChange = (label) => {
            this.setState({
                [label.target.name]: label.target.value
            })
            console.log("console in inputChange",this.state)
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
                console.log(nextProps.error)
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
