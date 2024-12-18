export default class AddBookPresenter {
    constructor(model, view, onBookAdded) {
        this.model = model;
        this.view = view;
        this.onBookAdded = onBookAdded;

        this.view.form.addEventListener('submit', this.handleAddBook.bind(this));
    }

    handleAddBook(event) {
        event.preventDefault();
        const newBook = this.view.getFormData();

        if (!newBook.title || !newBook.author || !newBook.year || !newBook.genre || !newBook.status) {
            alert('Все поля должны быть заполнены!');
            return;
        }

        this.model.addBook(newBook);
        this.view.resetForm();
        this.onBookAdded();
    }
}
