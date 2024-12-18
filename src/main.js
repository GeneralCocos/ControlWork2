import BookModel from "./models/BookModel.js";
import FilterModel from "./models/FilterModel.js";

import BookView from "./views/BookView.js";
import AddBookView from "./views/AddBookView.js";
import FilterView from "./views/FilterView.js";

const bookModel = new BookModel();
const filterModel = new FilterModel();

const bookView = new BookView('books-container', 'statistics-container');
const addBookView = new AddBookView('add-book-container');
const filterView = new FilterView('filters-container');


bookModel.subscribe(books => {
    const { genre, searchQuery } = filterModel.filters;
    const filteredBooks = bookModel.filterBooks(genre, searchQuery);

    bookView.renderBooks(filteredBooks);
    bookView.renderStatistics(books);   
});


filterModel.subscribe(() => {
    const { genre, searchQuery } = filterModel.filters;
    const filteredBooks = bookModel.filterBooks(genre, searchQuery);

    bookView.renderBooks(filteredBooks); 
});


addBookView.form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const newBook = addBookView.getFormData();
    await bookModel.addBook(newBook);
    addBookView.resetForm();
});


bookView.booksContainer.addEventListener('click', async (e) => {
    if (e.target.classList.contains('delete-btn')) {
        const bookId = e.target.dataset.id;
        await bookModel.removeBook(bookId);
    }
});


(async () => {
    await bookModel.loadBooks();
})();
