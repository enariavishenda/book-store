const updateLogin = (state, action) => {
    if (state === undefined) {
        return {
            users: [{id: 0, username: 'hello'}]
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