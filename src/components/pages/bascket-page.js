import React from "react";
import './basket-page.css'

const BasketPage = () => {
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
                <tr>
                    <th scope="row">Что-то</th>
                    <td>Что-то</td>
                    <td>Что-то</td>
                    <td>Что-то</td>
                    <td className="buttons">
                        <button className="btn btn-outline-danger btn-sm float-right">
                            <i className="fa fa-trash-o" />
                        </button>
                        <button className="btn btn-outline-success btn-sm float-right">
                            <i className="fa fa-plus-circle" />
                        </button>
                        <button className="btn btn-outline-warning btn-sm float-right">
                            <i className="fa fa-minus-circle" />
                        </button>
                    </td>
                </tr>
                </tbody>
            </table>
            <div className="total">
                Всего: $20
            </div>
        </div>
    )
}

export default BasketPage