import { listView, addNewView, contactView } from './modules/navigation.js';
import bookData from './modules/bookObject.js';
import Awesomebooks from './modules/awesomeBooks.js';
import { createBooks, sendToLocal } from './modules/createBook.js';
import showContactInfo from './modules/contact.js';
import { DateTime } from './modules/luxon.js';

const currentDate = () => {
  const dt = DateTime.now();
  const date = dt.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
  document.getElementById('date').innerHTML = date;
  setTimeout(currentDate, 1000);
};
window.onload = currentDate();

showContactInfo();

// Navigation links
listView();
addNewView();
contactView();

document.addEventListener('DOMContentLoaded', () => {
  createBooks();
});

document.getElementById('add-book-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const bookObject = new Awesomebooks(bookData.length, document.getElementById('book-title').value, document.getElementById('book-author').value);
  Awesomebooks.addBook(bookObject);
  document.getElementById('book-title').value = '';
  document.getElementById('book-author').value = '';
});

document.addEventListener('click', (event) => {
  if (event.target.classList.contains('remove-book')) {
    let bookData = JSON.parse(localStorage.getItem('storageBooksData'))
      ? JSON.parse(localStorage.getItem('storageBooksData'))
      : [];

    const filter = bookData.filter((item) => item.id !== parseInt(event.target.id, 10));
    bookData = filter;
    sendToLocal('storageBooksData', bookData);
    createBooks();
    window.location.reload();
  }
});
