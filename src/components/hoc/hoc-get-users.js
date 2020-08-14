import React, {Component} from 'react';


const withUsers = (View) => {

    return class extends Component {
        componentDidMount() {
            this.props.fetchLogin()
        }
        render() {
            return <View users={this.props.users}/>
        }
    }
}
export default withUsers
