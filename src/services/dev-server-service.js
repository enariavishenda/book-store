import axios from 'axios'

export default class DevBookService {
    api = axios.create({
        url: 'http://localhost:3333/',
    })

    getBooks = () => this.api.get(`/books`)
    getBookById = (id) => this.api.get(`/book/${id}`)
    createBook = (payload) => this.api.post(`/book`, payload)
    updateBookById = (id, payload) => this.api.put(`/book/${id}`, payload)
    deleteBookById = (id) => this.api.delete(`/book/${id}`)
}
