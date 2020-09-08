import axios from 'axios'

export default class DevBookService {

    getBooks = () => axios.get(`/api/books`)
    getBookById = (id) => axios.get(`/api/book/${id}`)
    createBook = (payload) => axios.post(`/api/book`, payload)
    updateBookById = (id, payload) => axios.put(`/api/book/${id}`, payload)
    deleteBookById = (id) => axios.delete(`/api/book/${id}`)
}
