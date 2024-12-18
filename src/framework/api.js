const API_BASE_URL = 'https://6762a71546efb37323756641.mockapi.io/books/books'; // Замените на ваш MockAPI URL

export const fetchBooks = async () => {
    try {
        const response = await fetch(API_BASE_URL);
        if (!response.ok) {
            throw new Error('Ошибка загрузки данных');
        }
        return await response.json();
    } catch (error) {
        console.error('Ошибка при загрузке книг:', error);
        return [];
    }
};

export const addBook = async (book) => {
    try {
        const response = await fetch(API_BASE_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(book),
        });
        if (!response.ok) {
            throw new Error('Ошибка при добавлении книги');
        }
        return await response.json();
    } catch (error) {
        console.error('Ошибка при добавлении книги:', error);
        throw error;
    }
};

export const deleteBook = async (id) => {
    try {
        const response = await fetch(`${API_BASE_URL}/${id}`, { method: 'DELETE' });
        if (!response.ok) {
            throw new Error('Ошибка при удалении книги');
        }
    } catch (error) {
        console.error('Ошибка при удалении книги:', error);
        throw error;
    }
};
