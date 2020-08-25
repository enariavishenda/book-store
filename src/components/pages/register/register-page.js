import React from 'react';
import './register-page.css'

const RegisterPage = () => {
    return (
    <div className="wrapper fadeInDown">
        <h2 className="h2">Регистрация</h2>
        <form id="formContent" onSubmit='#'>
            <div className="fadeIn first">
                <input
                    type="text"
                    placeholder="Имя"
                    className="form-control"
                    name="name"

                />
            </div>
            <div className="fadeIn second">
                <input
                    type="email"
                    placeholder="Email"
                    className="form-control"
                    name="email"

                />
            </div>
            <div className="fadeIn third">
                <input
                    type="password"
                    placeholder="Введите пароль"
                    className="form-control"
                    name="password"

                />
            </div>
            <div className="fadeIn fourth">
                <input
                    type="password"
                    placeholder="Подтвердите пароль"
                    className="form-control"
                    name="password_confirm"

                />
            </div>
            <div className="fadeIn fifth">
                <input type="submit" className="btn btn-primary" value="Зарегистрироваться"/>
            </div>
        </form>
    </div>
    )
}

export default RegisterPage