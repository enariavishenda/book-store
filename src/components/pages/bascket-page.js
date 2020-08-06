import React from "react";

import { connect } from 'react-redux';

import './basket-page.css';

const BasketPage = ({items, total, onInc, onDec, onDel}) => {
    const renderRow = (item, idx) => {
        const { id, name, count, total } = item
        return (
            <tr key={idx}>
                <th scope="row">{idx + 1}</th>
                <td>{name}</td>
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
            <table className="table table-hover">
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
            </table>
            <div className="total">
                Всего: ${total}
            </div>
        </div>
    )
}

const mapStateToProps = ({cartItems, orderTotal }) => {
    return {
        items: cartItems,
        total: orderTotal
    }
}

const mapDispatchToProps = () => {
    return {
        onInc: (id) => {console.log(`inc ${id}` )},
        onDec: (id) => {console.log(`dec ${id}` )},
        onDel: (id) => {console.log(`del ${id}` )},
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BasketPage)