import { Observable } from "../framework/observable.js";

export default class BookModel extends Observable {
    constructor() {
        super();
        this.books = [];
    }

    setBooks(books) {
        this.books = books;
        this.notify(this.books);
    }

    async loadBooks() {
        try {
            const response = await fetch('https://6762a71546efb37323756641.mockapi.io/books/books');
            if (!response.ok) {
                throw new Error('Ошибка загрузки данных');
            }
            const books = await response.json();
            this.setBooks(books);
        } catch (error) {
            console.error('Ошибка загрузки книг:', error);
        }
    }

    async addBook(book) {
        try {
            const response = await fetch('https://6762a71546efb37323756641.mockapi.io/books/books', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(book),
            });
            if (!response.ok) {
                throw new Error('Ошибка при добавлении книги');
            }
            const newBook = await response.json();
            this.books.push(newBook);
            this.notify(this.books);
        } catch (error) {
            console.error('Ошибка при добавлении книги:', error);
        }
    }

    async removeBook(id) {
        try {
            const response = await fetch(`https://6762a71546efb37323756641.mockapi.io/books/books/${id}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Ошибка при удалении книги');
            }
            this.books = this.books.filter(book => book.id !== id);
            this.notify(this.books);
        } catch (error) {
            console.error('Ошибка при удалении книги:', error);
        }
    }

    filterBooks(genre, searchQuery) {
        return this.books.filter(book => {
            const matchesGenre = genre ? book.genre === genre : true;
            const matchesQuery = searchQuery
                ? book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  book.author.toLowerCase().includes(searchQuery.toLowerCase())
                : true;
            return matchesGenre && matchesQuery;
        });
    }
}
