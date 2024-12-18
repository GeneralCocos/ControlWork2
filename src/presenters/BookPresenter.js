export default class BookPresenter {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    updateView(filters = {}) {
        const filteredBooks = this.model.filterBooks(filters.genre, filters.searchQuery);
        this.view.updateBooksList(filteredBooks);
    }

    refreshView() {
        this.updateView();
    }
}
