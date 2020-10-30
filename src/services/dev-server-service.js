import axios from 'axios'

export default class DevBookService {

    getBooks = () => axios.get(`/api/books`).then((response) => {
        const data = response.data.data.map(obj => replaceKeys(obj, /_/g, ''))
        console.log(data)
        return data
    })

    getBookById = (id) => axios.get(`/api/book/${id}`)
   // createBook = (payload) => axios.post(`/api/book`, payload)
    updateBookById = (id, payload) => axios.put(`/api/book/${id}`, payload)
    deleteBookById = (id) => axios.delete(`/api/book/${id}`)
}

export function replaceKeys (obj, find, replace) {
    return Object.keys(obj).reduce (
        (abc, key) => Object.assign(abc, { [key.replace(find, replace)]: obj[key] }), {});
}

export function errorCatch () {
    return
}