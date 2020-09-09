import axios from 'axios';
import jwt_decode from 'jwt-decode';
import setAuthToken from "../utils/setAuthToken";

const booksRequested = () => {
    return {
        type: 'FETCH_BOOKS_REQUEST'
    }
}

const booksLoaded = (newBooks) => {
    return {
        type: 'FETCH_BOOKS_SUCCESS',
        payload: newBooks
    }
}

const booksError = (error) => {
    return {
        type: 'FETCH_BOOKS_FAILURE',
        payload: error
    }
}

const bookAddedToCart = (bookId) => {
    return {
        type: 'BOOK_ADDED_TO_CART',
        payload: bookId
    }
}

const onIncrement = (bookId) => {
    return {
        type: 'BOOK_ADDED_TO_CART',
        payload: bookId
    }
}

const onDecrement = (bookId) => {
    return {
        type: 'BOOK_ON_DECREMENT',
        payload: bookId
    }
}

const onDelete = (bookId) => {
    return {
        type: 'BOOK_ON_DELETE',
        payload: bookId
    }
}

const fetchBooks = (book_api) => () => (dispatch) => {
    dispatch(booksRequested())
    book_api.getBooks()
        .then((data) => dispatch(booksLoaded(data)))
        .catch((err) => dispatch(booksError(err)))
}

const logIn = (user) => {
    return {
        type: 'LOGIN_IN',
        payload: user
    }
}

const fetchLogin = () => { //redux-saga
    return {
        type: 'REQUEST_LOGIN'
    }
}

const registerUser = (user, history) => (dispatch) => {
    axios.post('api/users/register', user)
        .then(res => history.push('/login'))
        .catch(err => {
            dispatch({
                type: 'GET_ERRORS',
                payload: err.response.data
            });
        });
}

const setCurrentUser = (decoded) => {
    return {
        type: 'SET_CURRENT_USER',
        payload: decoded
    }
}

const loginUser = (user) => (dispatch) => {
    axios.post('api/users/login', user)
        .then(res => {
            const {token} = res.data
            localStorage.setItem('jwtToken', token)
            setAuthToken(token)
            const decoded = jwt_decode(token)
            dispatch(setCurrentUser(decoded))
        })
        .catch(err => {
            dispatch({
                type: 'GET_ERRORS',
                payload: err.response.data
            });
        });
}

const logoutUser = (history) => (dispatch) => {
    localStorage.removeItem('jwtToken')
    setAuthToken(false)
    dispatch(setCurrentUser({}));
    history.push('/login')
}

const createBook = (addBook) => {
    return {
        type: 'CREATE_BOOK',
        payload: addBook
    }
}

const updateBook = (updateBook) => {
    return {
        type: 'UPDATE_BOOK',
        payload: updateBook
    }
}

const deleteBook = (addBook) => {
    return {
        type: 'DELETE_BOOK',
        payload: addBook
    }
}

const getBookId = (id) => {
    return {
        type: 'GET_ID_BOOK',
        payload: id
    }
}

export {
    fetchBooks,
    bookAddedToCart,
    onIncrement,
    onDecrement,
    onDelete,
    logIn,
    fetchLogin,
    registerUser,
    loginUser,
    setCurrentUser,
    logoutUser,
    createBook,
    updateBook,
    deleteBook,
    getBookId
}