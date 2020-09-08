export default class BookService {

    data = [
        { id: 1, title: 'Отдельная реальность', author: 'Карлос Кастанеда', genre: 'Эзотерика', popular: 5, price: 12, coverImage:'https://cdn1.ozone.ru/multimedia/1009030254.jpg'},
        { id: 2, title: 'Активная сторона бесконечности', author: 'Карлос Кастанеда', genre: 'Эзотерика', popular:6, price: 9, coverImage:'https://cdn1.ozone.ru/s3/multimedia-b/wc1200/6008920343.jpg'},
        { id: 3, title: 'Сила безмолвия', author: 'Карлос Кастанеда', genre: 'Эзотерика', popular: 6, price: 13, coverImage:'https://cdn1.ozone.ru/s3/multimedia-c/wc1200/6008920344.jpg'},
        { id: 4, title: 'Хулиганская экономика', author: 'Алексей Марков', genre: 'Экономика', popular: 5, price: 9, coverImage:'https://cdn1.ozone.ru/s3/multimedia-g/wc1200/6010182796.jpg'},
        { id: 5, title: 'Капитал', author: 'Карл Маркс', genre: 'Экономика', popular: 4, price: 11, coverImage:'https://cdn1.ozone.ru/s3/multimedia-p/wc1200/6011805397.jpg'},
        { id: 6, title: 'Третья волна', author: 'Элвин Тоффлер', genre: 'Экономика', popular: 7, price: 13, coverImage:'http://static.ozone.ru/multimedia/1012834147.jpg'}
    ]

    getBooks() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.data);
                reject(new Error('Что-то не так'))
            } , 500)
        })
    }
}

