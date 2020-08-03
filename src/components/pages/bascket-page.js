import React from "react";

const BasketPage = () => {
    return (
        <div>
            <div className="text-center"></div>
            <table className="table table-hover">
                <thead>
                <tr>
                    <th scope="col">Type</th>
                    <th scope="col">Column heading</th>
                    <th scope="col">Column heading</th>
                    <th scope="col">Column heading</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">Default</th>
                    <td>Column content</td>
                    <td>Column content</td>
                    <td>Column content</td>
                </tr>

                </tbody>
            </table>
        </div>
    )
}

export default BasketPage