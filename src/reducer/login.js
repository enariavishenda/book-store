import def from '../components/pages/register/default.png'

const updateLogin = (state, action) => {
    if (state === undefined) {
        return {
            users: {
                id: 0,
                email: 'Вы не подключили dev-server',
                icon: def,
                password: 'хе-хе'
            }
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