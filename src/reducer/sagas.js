import {takeEvery, put, call} from 'redux-saga/effects'
import {logIn, crudBook, booksLoaded} from "../actions/actions";
import axios from "axios";
import {replaceKeys} from "../services/dev-server-service";

// watchers
export function* sagaWatcher () {
    yield takeEvery('REQUEST_BOOKS_SAGAS', sagaGetBook)
    yield takeEvery('REQUEST_LOGIN_SAGAS', sagaFetchLogin)
    yield takeEvery('CREATE_BOOK_SAGAS', sagaCBook)
    yield takeEvery('UPDATE_BOOK_SAGAS', sagaUBook)
    yield takeEvery('DELETE_BOOK_SAGAS', sagaDBook)
    yield takeEvery('GET_BOOK_BY_ID_SAGAS', sagaGBIBook)
}

// workers

function* sagaFetchLogin() {
    const payload = yield call(fetchLogin)
    yield put(logIn(payload))
}

function* sagaGetBook() {
    const payload = yield call(getBooks)
    yield put(booksLoaded(payload))
}

function* sagaCBook(addBook) {
    const payload = yield call(createBook, addBook.payload)
    yield put(crudBook(payload))
}
function* sagaUBook(updBook) {
    const payload = yield call()
    yield put(crudBook(payload))
}
function* sagaDBook(delBook) {
    const payload = yield call(deleteBook, delBook.payload)
    yield put(crudBook(payload))
}
function* sagaGBIBook(getBYID) {
    const payload = yield call(getIDBook, getBYID.payload)
    yield put(crudBook(payload))
}

// functions
async function fetchLogin() {
    const responce = await fetch('/users')
    return await responce.json()
}

async function getBooks() {
    const res = await axios.get('/api/books')
    return res.data.data.map(obj => replaceKeys(obj, /_/g, ''))
}

async function createBook(payload) {
    const res = await axios.post(`/api/book`, payload)
    return res.data
}
async function deleteBook(id) {
    const res = await axios.delete(`/api/book/${id}`)
    return res.data
}
async function updateBook(id, payload) {
    const res = await axios.put(`/api/book/${id}`, payload)
    return res.data
}

async function getIDBook(id) {
    const res = await axios.get(`/api/book/${id}`)
    return res.data.data
}