import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import createSagaMiddleware from 'redux-saga';
import reducer from "./reducer";
import {sagaWatcher} from "./reducer/sagas";

const saga = createSagaMiddleware()

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
    applyMiddleware(
        thunkMiddleware,
        stringMiddleware,
        logMiddleware,
        saga))

saga.run(sagaWatcher)

store.dispatch(delayActionCreator(5000))

export default store