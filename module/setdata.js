import bookUi from './dataUi.js';

const arrBook = [];

const setData = (book) => {
  arrBook.push(book);

  localStorage.setItem('book', JSON.stringify(arrBook));

  bookUi(book);
};

export default setData;