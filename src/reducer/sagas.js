import {takeEvery, put, call} from 'redux-saga/effects'
import {logIn, crudBook} from "../actions/actions";
import axios from "axios";

// watchers
export function* sagaWatcher () {
    yield takeEvery('REQUEST_LOGIN_SAGAS', sagaFetchLogin)
    yield takeEvery('CREATE_BOOK_SAGAS', sagaCBook)
    // yield takeEvery('UPDATE_BOOK_SAGAS', sagaUBook)
    // yield takeEvery('DELETE_BOOK_SAGAS', sagaDBook)
    // yield takeEvery('GET_BOOK_BY_ID_SAGAS', sagaGBIBook)
}

// workers

function* sagaFetchLogin() {
    const payload = yield call(fetchLogin)
    yield put(logIn(payload))
}

function* sagaCBook(addBook) {
    const payload = yield call(createBook, addBook.payload)
    yield put(crudBook(payload))
}

// function* sagaUBook() {
//     const payload = yield call()
//     yield put(crudBook(payload))
// }
// function* sagaDBook() {
//     const payload = yield call()
//     yield put(crudBook(payload))
// }
// function* sagaGBIBook() {
//     const payload = yield call()
//     yield put(crudBook(payload))
// }

// functions
async function fetchLogin() {
    const responce = await fetch('/users')
    return await responce.json()
}

async function createBook(payload) {
    const res = await axios.post(`/api/book`, payload)
    console.log(res.json())
    return res.json()
}