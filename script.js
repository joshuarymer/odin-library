/* eslint-disable no-restricted-syntax */
const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book) {
    if (book.constructor === Book) {
        myLibrary.push(book);
    }
}

function libraryIndex(book) {
    let count = 0;
    for (const el of myLibrary) {
        if (el.title !== book.title) {
            count += 1;
        } else break;
    }
    return count;
}

function buildCard(book) {
    const container = document.getElementById('card-con');
    const card = document.createElement('div');
    const title = document.createElement('div');
    const author = document.createElement('div');
    const pages = document.createElement('div');
    const read = document.createElement('div');
    const deleteButton = document.createElement('button');
    card.classList.add('card');
    deleteButton.classList.add('delete-button');
    deleteButton.innerHTML = 'Delete';

    card.append(title, author, pages, read, deleteButton);

    title.innerText = `Title: ${book.title}`;
    author.innerText = `Author: ${book.author}`;
    pages.innerText = `Pages: ${book.pages}`;
    read.innerText = `Status: ${book.read}`;
    card.dataset.index = libraryIndex(book);

    container.appendChild(card);
}

function displayLibrary() {
    myLibrary.forEach((element) => {
        buildCard(element);
    });
}

function addBook() {
    const title = document.getElementById('title-text').value;
    const author = document.getElementById('author-text').value;
    const pages = document.getElementById('pages-text').value;
    const read = document.getElementById('read-check');
    const container = document.getElementById('card-con');

    const readCheck = () => (read.checked ? 'read' : 'not read');

    const newBook = new Book(title, author, pages, readCheck());

    if (title !== '' && author !== '' && pages !== '') {
        addBookToLibrary(newBook);
        buildCard(myLibrary[myLibrary.length - 1]);
        container.innerHTML = '';
        displayLibrary();
    }

    document.getElementById('title-text').value = '';
    document.getElementById('author-text').value = '';
    document.getElementById('pages-text').value = '';
    document.getElementById('read-check').checked = false;
}

const addbook = document.getElementById('addbook');

addbook.addEventListener('click', () => addBook());
