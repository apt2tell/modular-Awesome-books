import bookData from './bookObject.js';

// Method to display books
export const createBooks = () => {
  const booksContainer = document.querySelector('.books-container');
  const displayBooks = bookData.map((bookList) => `<div class="removed" id="remove"><p class="book-name">"${bookList.title}" By ${bookList.author}</p>
  <button type="button" id="${bookList.id}" class="remove-book">Remove</button><hr></div>
  `).join('');
  booksContainer.innerHTML = displayBooks;
};
  // function to send to local storage
export const sendToLocal = (data, books) => {
  localStorage.setItem(data, JSON.stringify(books));
  createBooks();
};
