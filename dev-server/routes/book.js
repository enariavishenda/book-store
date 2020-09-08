import express from 'express'

import { getBooks, getBooksById, createBook, updateBook, deleteBook } from './../controller/books-utils'

const router = express.Router()

router.post('/book', createBook)
router.put('/book/:id', updateBook)
router.delete('/book/:id', deleteBook)
router.get('/book/:id', getBooksById)
router.get('/books', getBooks)

module.exports = router;