
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

const registerUser = (user, history) => dispatch => {
    fetch('/api/users/register',{
        method: "POST",
        body: user
    })
        .then(res => history.push('/login'))
        .catch(err => {
            dispatch({
                type: 'GET_ERRORS',
                payload: err.response.data
            });
        });
}

const loginUser = (user) => dispatch => {
    fetch('/api/users/login', {
        method: "POST",
        body: user
    })
        .then(res => {
            console.log(res.data);
        })
        .catch(err => {
            dispatch({
                type: 'GET_ERRORS',
                payload: err.response.data
            });
        });
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
    loginUser
}