const Books = require('../model/books')

getBooks = async (req, res) => {
    await Books.find({},)
}

