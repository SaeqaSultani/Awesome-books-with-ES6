import { DateTime } from './module/luxon.js';
import Book from './module/classData.js';
import bookUi from './module/dataUi.js';
import getdata from './module/getData.js';
import setData from './module/setdata.js';

const listBook = document.getElementById('listBook');
const addBook = document.getElementById('addBook');
const countact = document.getElementById('countact');
const bookList = document.getElementById('container-list');
const bookForm = document.getElementById('bookForm');
const countactUs = document.getElementById('countactUs');
const btn = document.getElementById('btnAdd');
const title = document.getElementById('title');
const author = document.getElementById('author');
const time = document.getElementById('time');

const d = DateTime.now();
time.innerHTML = d;

listBook.addEventListener('click', () => {
  bookList.style.display = 'flex';
  bookForm.style.display = 'none';
  countactUs.style.display = 'none';
});

addBook.addEventListener('click', () => {
  bookList.style.display = 'none';
  bookForm.style.display = 'flex';
  countactUs.style.display = 'none';
});

countact.addEventListener('click', () => {
  bookList.style.display = 'none';
  bookForm.style.display = 'none';
  countactUs.style.display = 'flex';
});

const book = getdata();
book.forEach((e) => {
  bookUi(e);
});

btn.addEventListener('click', (e) => {
  e.preventDefault();
  const titleValue = title.value;
  const authorValue = author.value;
  const objBook = new Book(titleValue, authorValue);
  if (!(titleValue === '' && authorValue === '')) {
    setData(objBook);
  }
});

const deletBookFromLocalSorage = (index) => {
  const data = getdata();
  const deletebook = data.filter((item) => item.title !== index);
  localStorage.setItem('book', JSON.stringify(deletebook));
};

const deleteBookFromArray = (target) => {
  if (target.classList.contains('remove')) {
    deletBookFromLocalSorage(target.parentNode.firstElementChild
      .firstElementChild.innerHTML);
    target.parentNode.remove();
  }
};
const manageRemove = (item) => {
  deleteBookFromArray(item.target);
};
document.getElementById('container-list').addEventListener('click', manageRemove);
