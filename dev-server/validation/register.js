const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateRegisterInput(data) {
    let errors = {};
    data.name = !isEmpty(data.name) ? data.name: '';
    data.email = !isEmpty(data.email) ? data.email: '';
    data.password = !isEmpty(data.password) ? data.password: '';
    data.password_confirm = !isEmpty(data.password_confirm) ? data.password_confirm: '';

    if (!Validator.isLength(data.name, {min: 2, max: 30})) {
        errors.name = 'Имя должно быть от 2 до 30 символов';
    }
    if (Validator.isEmpty(data.name)) {
        errors.name = 'Поле имя обязательно для заполнения';
    }
    if (Validator.isEmail(data.email)) {
        errors.email = 'Поле адреса почты обязательно для заполнения';
    }
    if (Validator.isEmpty(data.email)) {
        errors.email = 'Поле имя обязательно для заполнения';
    }
    if(!Validator.isLength(data.password, {min: 6, max: 30})) {
        errors.password = 'Пароль должен быть не менее 6 символов';
    }
    if(Validator.isEmpty(data.password)) {
        errors.password = 'Поле пароля обязательно для заполнения';
    }
    if(!Validator.isLength(data.password_confirm, {min: 6, max: 30})) {
        errors.password_confirm = 'Пароль должен быть не менее 6 символов';
    }
    if(!Validator.equals(data.password, data.password_confirm)) {
        errors.password_confirm = 'Пароли должны совпадать';
    }
    if(Validator.isEmpty(data.password_confirm)) {
        errors.password_confirm = 'Поле подтверждение пароля обязательно для заполнения';
    }
    return {
        errors,
        isValid: isEmpty(errors)
    }
}