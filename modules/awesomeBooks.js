import bookData from './bookObject.js';
import { sendToLocal } from './createBook.js';

export default class Awesomebooks {
  constructor(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
  }

  // Method to add books
  static addBook = (bookItem) => {
    bookData.push(bookItem);
    // eslint-disable-next-line no-use-before-define
    sendToLocal('storageBooksData', bookData);
  }
}