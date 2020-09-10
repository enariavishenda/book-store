import updateBookList from "./book-list";
import updateShoppingCart from "./shopping-cart";
import updateLogin from "./login";
import errorReducer from "./errorReducer";
import authReducer from "./authReducer";
import adminReducer from "./adminReducer";

const reducer = (state, action) => {
    return {
        bookList: updateBookList(state, action),
        shoppingCart: updateShoppingCart(state, action),
        login: updateLogin(state, action),
        error: errorReducer(state, action),
        auth: authReducer(state, action),
        admin: adminReducer(state, action)
    }
}

export default reducer