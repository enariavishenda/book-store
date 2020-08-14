import updateBookList from "./book-list";
import updateShoppingCart from "./shopping-cart";
import updateLogin from "./login";

const reducer = (state, action) => {
    return {
        bookList: updateBookList(state, action),
        shoppingCart: updateShoppingCart(state, action),
        login: updateLogin(state, action)
    }
}

export default reducer