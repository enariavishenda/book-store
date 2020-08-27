import isEmpty from "../utils/is-empty";

const authReducer = (state, action) => {

    if (state === undefined) {
        return {
            isAuthenticated: false,
            user: {}
        }
    }

    switch (action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload
            }
        default:
            return state.auth
    }
}

export default authReducer