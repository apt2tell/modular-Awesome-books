const bookData = JSON.parse(localStorage.getItem('storageBooksData'))
  ? JSON.parse(localStorage.getItem('storageBooksData'))
  : [];

export default bookData;