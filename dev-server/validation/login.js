const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateLoginInput(data) {
    let errors = {};
    data.email = !isEmpty(data.email) ? data.email : '';
    data.password = !isEmpty(data.password) ? data.password : '';

    if(!Validator.isEmail(data.email)) {
        errors.email = 'Адрес электронной почты недействителен';
    }

    if(Validator.isEmpty(data.email)) {
        errors.email = 'Электронная почта обязательна';
    }

    if(!Validator.isLength(data.password, {min: 6, max: 30})) {
        errors.password = 'Пароль должен быть не менее 6 символов';
    }

    if(Validator.isEmpty(data.password)) {
        errors.password = 'Поле пароля обязательно для заполнения';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}