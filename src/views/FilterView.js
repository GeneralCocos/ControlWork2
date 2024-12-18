import { renderElement } from "../framework/render.js";

export default class FilterView {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.render();
    }

    render() {
        const html = `
            <div class="filters">
                <h2>Фильтры</h2>
                <select id="genre-filter">
                    <option value="">Все жанры</option>
                    <option value="Художественная литература">Художественная литература</option>
                    <option value="Научная литература">Научная литература</option>
                    <option value="Историческая литература">Историческая литература</option>
                    <option value="Программирование">Программирование</option>
                </select>
                <input type="text" id="search-input" placeholder="Поиск по названию или автору">
            </div>
        `;
        renderElement(this.container, html);
    }

    getFilters() {
        return {
            genre: this.container.querySelector('#genre-filter').value,
            searchQuery: this.container.querySelector('#search-input').value.trim(),
        };
    }

    bindFiltersChange(callback) {
        this.container.querySelector('#genre-filter').addEventListener('change', callback);
        this.container.querySelector('#search-input').addEventListener('input', callback);
    }
}
