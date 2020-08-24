import def from '../components/pages/login/default.png'

const updateLogin = (state, action) => {
    if (state === undefined) {
        return {
            users: [{id: 0,
                username: 'hello',
                icon: 'https://www.vhv.rs/dpng/d/120-1200250_aws-simple-icons-non-service-specific-user-profile.png',
                password: ''}]
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