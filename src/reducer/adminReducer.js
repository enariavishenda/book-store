
const adminReducer = (state, action) => {

    if (state === undefined) {
        return {}
    }

    switch (action.type) {
        case 'CRUD_BOOK':
            return action.payload;
        case 'ERROR_ADMIN':
            return action.payload;
        default:
            return state.admin
    }
}

export default adminReducer