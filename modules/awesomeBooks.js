let bookData = JSON.parse(localStorage.getItem('storageBooksData'))
  ? JSON.parse(localStorage.getItem('storageBooksData'))
  : [];

class Awesomebooks {
  constructor(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
  }

  // Method to display books
  static createBooks = () => {
    const booksContainer = document.querySelector('.books-container');
    const displayBooks = bookData.map((bookList) => `<div class="removed" id="remove"><p class="book-name">"${bookList.title}" By ${bookList.author}</p>
  <button type="button" onclick="Awesomebooks.delBook(${bookList.id})" id="remove-book">Remove</button><hr></div>
  `).join('');
    booksContainer.innerHTML = displayBooks;
  }

  // Method to add books
  static addBook = (bookItem) => {
    bookData.push(bookItem);
    // eslint-disable-next-line no-use-before-define
    sendToLocal('storageBooksData', bookData);
  }

  // Method to delete books
  // eslint-disable-next-line no-unused-vars
  static delBook = (id) => {
    const filteredBooks = bookData.filter((item) => item.id !== this.id);
    bookData = filteredBooks;
    // eslint-disable-next-line no-use-before-define
    sendToLocal('storageBooksData', filteredBooks);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  Awesomebooks.createBooks();
});
// function to send to local storage
const sendToLocal = (a, b) => {
  localStorage.setItem(a, JSON.stringify(b));
  Awesomebooks.createBooks();
};

document.getElementById('add-book-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const bookObject = new Awesomebooks(bookData.length, document.getElementById('book-title').value, document.getElementById('book-author').value);
  Awesomebooks.addBook(bookObject);
  document.getElementById('book-title').value = '';
  document.getElementById('book-author').value = '';
});

// Method to del book
Awesomebooks.delBook();