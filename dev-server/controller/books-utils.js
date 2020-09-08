import Book from '../model/books'

export const getBooks = async (req, res) => {
    await Book.find({}, (err, books) => {
        if (err) {
            return res.status(400).json({success: false, error: err})
        }
        if (!books.length) {
            return res.status(404).json({success: false, error: 'Книги не найдены'})
        }
        return res.status(200).json({success: true, data: books})
            .catch((err) => console.log(err))
    })
}

export const getBooksById = async (req, res) => {
    await Book.findOne({_id: req.param.id}, (err, book) => {
        if (err) {
            return res.status(400).json({success: false, error: err})
        }
        if (!book) {
            return res.status(404).json({success: false, error: 'Книга не найдена'})
        }
        return res.status(200).json({success: true, data: book})
            .catch((err) => console.log(err))
    })
}

export const createBook = (req, res) => {

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
            id: book._id,
            message: 'Книга создана',
        })
    }).catch(error => {
            return res.status(400).json({
                error,
                message: 'Не удалось создать книгу',
            })
        })
}

export const updateBook = async (req, res) => {

    const body = req.body
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'Необходимы изменения для тела объекта',
        })
    }

    Book.findOne({ _id: req.params.id }, (err, book) => {
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
                    id: book._id,
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
}

export const  deleteBook = async (req, res) => {

    await Book.findOneAndDelete({ _id: req.params.id }, (err, book) => {
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
}
