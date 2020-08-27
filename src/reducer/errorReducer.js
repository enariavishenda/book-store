
const errorReducer = (state, action ) => {

    if (state === undefined) {
        return {}
    }

    switch(action.type) {
        case 'GET_ERRORS':
            return action.payload;
        default:
            return state.error;
    }
}
export default errorReducer