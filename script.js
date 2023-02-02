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

function buildCard(book) {
    const container = document.getElementById('card-con');
    const card = document.createElement('div');
    const title = document.createElement('div');
    const author = document.createElement('div');
    const pages = document.createElement('div');
    const read = document.createElement('div');

    card.classList.add('card');

    card.append(title, author, pages, read);

    title.innerText = `Title: ${book.title}`;

    author.innerText = `Author: ${book.author}`;
    pages.innerText = `Pages: ${book.pages}`;
    read.innerText = `Status: ${book.read}`;

    container.appendChild(card);
}

function libraryCheck() {
    myLibrary.forEach((element) => buildCard(element));
}

const metamorphoses = new Book('Metamorphoses', 'Ovid', 350, 'Not yet');

const aeneid = new Book('The Aeneid', 'Virgil', 250, 'Not yet');

addBookToLibrary(metamorphoses);

addBookToLibrary(aeneid);

libraryCheck();
