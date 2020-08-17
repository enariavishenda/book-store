import {takeEvery, put, call} from 'redux-saga/effects'
import {logIn} from "../actions/actions";

export function* sagaWatcher () {
    yield takeEvery('REQUEST_LOGIN', sagaWorker)
}

function* sagaWorker() {
    const payload = yield call(fetchLogin)
    yield put(logIn(payload))
}

async function fetchLogin() {
    const responce = await fetch('/users')
    return await responce.json()
}