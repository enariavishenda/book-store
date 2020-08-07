import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";

import reducer from "./reducer";

const logMiddleware = ({getState}) => (next) => (action) => {
    console.log(action.type, getState())
    return next(action)
}

const stringMiddleware = () => (next) => (action) => {
    if (typeof action === 'string') {
        return next({  //Ссылка на следующий Middleware идущий по порядку, передаст ему событие
            type: action
        })
    }
    return next(action)
}

const delayActionCreator = (timeout) => (dispatch) => {
    setTimeout(() => dispatch({
        type: 'DELAY_ACTION'
    }), timeout)
}

const store = createStore(reducer,
    applyMiddleware(thunkMiddleware, stringMiddleware,logMiddleware))

store.dispatch(delayActionCreator(5000))

export default store