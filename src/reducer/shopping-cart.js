const updateCartItems = (cartItems, item, thisId) => {
    if (item.count === 0) {
        return [
            ...cartItems.slice(0, thisId),
            ...cartItems.slice(thisId + 1)
        ]
    }
    if (thisId === -1) {
        return [
            ...cartItems,
            item
        ]
    }
    return [
        ...cartItems.slice(0, thisId),
        item,
        ...cartItems.slice(thisId + 1)
    ]
}

const updateCartItem = (book, item = {}, lambda) => {

    const { id= book.id, count = 0, title = book.title, total = 0} = item
    return {
        id,
        title,
        count: count + lambda,
        total: total + lambda*book.price
    }
}

const updateOrderTotal = (books, fn) => {
    const item = books.map(fn).reduce((a, b) => a + b, 0)
    if ( item === 0) {
        return ''
    } else
        return item
}


const updateOrderItems = (state, bookId, lambda) => {
    const { bookList: { books }, shoppingCart: { cartItems }} = state
    const book = books.find((book) => book.id === bookId)
    const index = cartItems.findIndex(({id}) => id === bookId)
    const item = cartItems[index]
    const newItem = updateCartItem(book, item, lambda)
    const updateNewCartItems = updateCartItems(cartItems, newItem, index)
    return {
        cartItems: updateNewCartItems,
        orderTotal: updateOrderTotal(updateNewCartItems, (item) => item.total),
        numBasketItems: updateOrderTotal(updateNewCartItems, (item) => item.count)
    }
}


const updateShoppingCart = (state, action) => {
    if (state === undefined){
        return {
            cartItems: [],
            orderTotal: '',
            numBasketItems: ''
        }
    }
    switch (action.type) {
        case 'BOOK_ADDED_TO_CART':
            return updateOrderItems(state, action.payload, 1)
        case 'BOOK_ON_DECREMENT':
            return updateOrderItems(state, action.payload, -1)
        case 'BOOK_ON_DELETE':
            return updateOrderItems(state, action.payload,
                -state.shoppingCart.cartItems
                    .find(({id})=> id === action.payload).count)
        default:
            return state.shoppingCart
    }
}

export default updateShoppingCart