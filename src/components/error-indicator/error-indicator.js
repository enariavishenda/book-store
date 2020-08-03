import React from "react";
import './error-indicator.css'
import icon_1 from './0.png'

const Error = () => {
    return (
        <div className="error">
            <span>
                <img src={icon_1} alt="error" className="icon_1"/>
            </span>
                <div className="alert alert-dismissible alert-danger">
                    <strong>Что то пошло не так, сервис недоступен</strong>
                </div>
        </div>
    )
}

export default Error