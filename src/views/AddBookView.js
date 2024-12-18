import { renderElement } from "../framework/render.js";

export default class AddBookView {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.render();
        this.form = this.container.querySelector('#book-form');
    }

    render() {
        const html = `
            <div class="book-form">
                <h2>Добавление книги</h2>
                <form id="book-form">
                    <input type="text" id="title" placeholder="Название книги" required>
                    <input type="text" id="author" placeholder="Автор" required>
                    <input type="number" id="year" placeholder="Год издания" min="1000" max="2024" required>
                    <select id="genre" required>
                        <option value="">Выберите жанр</option>
                        <option value="FICTION">Художественная литература</option>
                        <option value="SCIENCE">Научная литература</option>
                        <option value="HISTORY">Историческая литература</option>
                        <option value="PROGRAMMING">Программирование</option>
                    </select>
                    <select id="status" required>
                        <option value="">Статус книги</option>
                        <option value="AVAILABLE">Доступна</option>
                        <option value="BORROWED">Выдана</option>
                        <option value="RESERVED">Зарезервирована</option>
                    </select>
                    <button type="submit">Добавить книгу</button>
                </form>
            </div>
        `;
        renderElement(this.container, html);
    }

    getFormData() {
        const genreMapping = {
            FICTION: 'Художественная литература',
            SCIENCE: 'Научная литература',
            HISTORY: 'Историческая литература',
            PROGRAMMING: 'Программирование',
        };

        const statusMapping = {
            AVAILABLE: 'Доступна',
            BORROWED: 'Выдана',
            RESERVED: 'Зарезервирована',
        };

        // Получаем данные формы
        const title = this.container.querySelector('#title').value.trim();
        const author = this.container.querySelector('#author').value.trim();
        const year = this.container.querySelector('#year').value.trim();
        const genreKey = this.container.querySelector('#genre').value;
        const statusKey = this.container.querySelector('#status').value;

        return {
            title,
            author,
            year,
            genre: genreMapping[genreKey] || genreKey,
            status: statusMapping[statusKey] || statusKey,
        };
    }

    resetForm() {
        this.form.reset();
    }
}
