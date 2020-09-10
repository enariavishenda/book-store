
const adminReducer = (state, action) => {

    if (state === undefined) {
        return {}
    }

    switch (action.type) {
        case 'CREATE_BOOK':
            return action.payload;
        case 'UPDATE_BOOK':
            return action.payload;
        case 'DELETE_BOOK':
            return action.payload;
        case 'GET_BOOK_BY_ID':
            return action.payload;
        default:
            return state.admin
    }
}

export default adminReducer