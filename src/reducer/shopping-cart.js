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

const updateOrderItems = (state, bookId, lambda) => {
    const { bookList: { books }, shoppingCart: { cartItems }} = state
    const book = books.find((book) => book.id === bookId)
    const index = cartItems.findIndex(({id}) => id === bookId)
    const item = cartItems[index]
    const newItem = updateCartItem(book, item, lambda)
    return {
        cartItems: updateCartItems(cartItems, newItem, index),
        orderTotal: 0
    }
}


const updateShoppingCart = (state, action) => {
    if (state === undefined){
        return {
            cartItems: [],
            orderTotal: 0
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