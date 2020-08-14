import def from '../components/pages/login/default.png'

const updateLogin = (state, action) => {
    if (state === undefined) {
        return {
            users: [{id: 0, username: 'hello', icon: def }]
        }
    }
    switch (action.type) {
        case 'LOGIN_IN':
            return {
                users: action.payload
            }
        default:
            return state.login
    }
}

export default updateLogin