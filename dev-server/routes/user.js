const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const validateRegisterInput = require('../validation/register');
const validateLoginInput = require('../validation/login');
const User = require('../model/user');

router.get('/hello', function(req, res) {
    res.send('hello users get api/users/hello');
});


router.post('/register', function(req, res) {

    const { errors, isValid } = validateRegisterInput(req.body);

    if(!isValid) {
        return res.status(400).json(errors);
    }
    User.findOne({
        email: req.body.email
    }).then(user => {
        if(user) {
            return res.status(400).json({
                email: 'Адрес электронной почты уже существует'
            });
        }
        else {
            // Добавление картинки пользователя будет позже
            const avatar = 'https://www.vhv.rs/dpng/d/120-1200250_aws-simple-icons-non-service-specific-user-profile.png';

            const type = 'user'

            const newUser = new User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                avatar,
                type
            });

            bcrypt.genSalt(10, (err, salt) => {
                if(err) console.error('Произошла ошибка', err);
                else {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if(err) console.error('Произошла ошибка', err);
                        else {
                            newUser.password = hash;
                            newUser
                                .save()
                                .then(user => {
                                    res.json(user.type)
                                });
                        }
                    });
                }
            });
        }
    });
});

router.post('/login', (req, res) => {

    const { errors, isValid } = validateLoginInput(req.body);

    if(!isValid) {
        return res.status(400).json(errors);
    }

    const email = req.body.email;
    const password = req.body.password;

    User.findOne({email})
        .then(user => {
            if(!user) {
                errors.email = 'Пользователь не найден'
                return res.status(404).json(errors);
            }
            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if(isMatch) {
                        const payload = {
                            id: user.id,
                            name: user.name,
                            avatar: user.avatar,
                            type: user.type
                        }
                        jwt.sign(payload, 'secret', {
                            expiresIn: 3600
                        }, (err, token) => {
                            if(err) console.error('В токене есть какая-то ошибка', err);
                            else {
                                res.json({
                                    success: true,
                                    token: `Bearer ${token}`
                                });
                            }
                        });
                    }
                    else {
                        errors.password = 'Неверный пароль';
                        return res.status(400).json(errors);
                    }
                });
        });
});

router.get('/me', passport.authenticate('jwt', { session: false }), (req, res) => {
    return res.json({
        id: req.user.id,
        name: req.user.name,
        email: req.user.email
    });
});

module.exports = router;