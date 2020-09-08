import express from 'express'

const router = express.Router()
const Book = require('../model/books')

router.post('/book', (req, res) => {

    const body = req.body
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'Нужно создать книгу',
        })
    }

    const book = new Book(body)
    if (!book) {
        return res.status(400).json({success: false, error: err})
    }

    book.save().then(() => {
        return res.status(201).json({
            success: true,
            id: book.id,
            message: 'Книга создана',
        })
    }).catch(error => {
        return res.status(400).json({
            error,
            message: 'Не удалось создать книгу',
        })
    })
})

router.put('/book/:id', (req, res) => {

    const body = req.body
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'Необходимы изменения для тела объекта',
        })
    }

    Book.findOne({ id: req.params.id }, (err, book) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Книга не найдена',
            })
        }
        book.title = body.title
        book.author = body.author
        book.genre = body.genre
        book.popular = body.popular
        book.price = body.price
        book.coverImage = body.coverImage
        book
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: book.id,
                    message: 'Книга обновлена',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Ошибка. Книга не обновлена',
                })
            })
    })
})
router.delete('/book/:id', (req, res) => {

    Book.findOneAndDelete({ _id: req.params.id }, (err, book) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!book) {
            return res
                .status(404)
                .json({ success: false, error: `Книга не найдена` })
        }

        return res.status(200).json({ success: true, data: book })
    }).catch(err => console.log(err))
})
router.get('/book/:id', (req, res) => {
    Book.findOne({id: req.param.id}, (err, book) => {
        if (err) {
            return res.status(400).json({success: false, error: err})
        }
        if (!book) {
            return res.status(404).json({success: false, error: 'Книга не найдена'})
        }
        return res.status(200).json({success: true, data: book})
            .catch((err) => console.log(err))
    })
})
router.get('/books', (req, res) => {
    Book.find({}, (err, books) => {
        if (err) {
            return res.status(400).json({success: false, error: err})
        }
        if (!books.length) {
            return res.status(404).json({success: false, error: 'Книги не найдены'})
        }
        return res.status(200).json({success: true, data: books})
        //.catch((err) => console.log(err))
    })
})

module.exports = router;