import React from "react";

import { connect } from 'react-redux';

import './basket-page.css';
import {onIncrement, onDelete, onDecrement} from "../../actions";

const BasketPage = ({items, orderTotal, onInc, onDec, onDel}) => {
    const renderRow = (item, idx) => {
        const { id, title, count, total } = item
        return (
            <tr key={idx}>
                <th scope="row">{idx + 1}</th>
                <td>{title}</td>
                <td>{count}</td>
                <td>${total}</td>
                <td className="buttons">
                    <button
                        onClick={() => onInc(id)}
                        className="btn btn-outline-success btn-sm">
                        <i className="fa fa-plus-circle" />
                    </button>
                    <button
                        onClick={() => onDec(id)}
                        className="btn btn-outline-warning btn-sm">
                        <i className="fa fa-minus-circle" />
                    </button>
                    <button
                        onClick={() => onDel(id)}
                        className="btn btn-outline-danger btn-sm">
                        <i className="fa fa-trash-o" />
                    </button>
                </td>
            </tr>
        )
    }
    return (
        <div className="basket-list">
            <h5 className="text-center">Ваш заказ</h5>
            {(orderTotal) ? <table className="table table-hover">
                <thead>
                <tr>
                    <th scope="col">№</th>
                    <th scope="col">Item</th>
                    <th scope="col">Count</th>
                    <th scope="col">Price</th>
                    <th scope="col">Action</th>
                </tr>
                </thead>

                <tbody>
                {
                    items.map(renderRow)
                }
                </tbody>
            </table> : <h4>Вы еще не добавили товар в корзину</h4>}
            <div className="total">
                {(orderTotal) ? `Всего: $${orderTotal}` : ''}
            </div>
        </div>
    )
}

const mapStateToProps = ({shoppingCart: {cartItems, orderTotal }}) => {
    return {
        items: cartItems,
        orderTotal: orderTotal
    }
}

const mapDispatchToProps = {
        onInc: onIncrement,
        onDec: onDecrement,
        onDel: onDelete
}

export default connect(mapStateToProps, mapDispatchToProps)(BasketPage)