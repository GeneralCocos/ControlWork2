import { renderElement } from "../framework/render.js";

export default class BookView {
    constructor(booksContainerId, statsContainerId) {
        this.booksContainer = document.getElementById(booksContainerId);
        this.statsContainer = document.getElementById(statsContainerId);
    }

    renderBooks(books) {
        const html = books.map(book => `
            <div class="book-card">
                <p><strong>${book.title}</strong> (${book.year})</p>
                <p>${book.author} - ${book.genre}</p>
                <p>${book.status}</p>
                <button class="delete-btn" data-id="${book.id}">Удалить</button>
            </div>
        `).join('');
        renderElement(this.booksContainer, html);
    }

    renderStatistics(books) {
        const totalBooks = books.length;
        const html = `
            <div class="statistics">
                <h2>Статистика</h2>
                <p>Всего книг: <span>${totalBooks}</span></p>
            </div>
        `;
        renderElement(this.statsContainer, html);
    }
}
