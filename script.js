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

function libraryCheck() {
}

const metamorphoses = new Book('Metamorphoses', 'Ovid', 350, 'not read');

const aeneid = new Book('The Aeneid', 'Virgil', 250, 'not read');

addBookToLibrary(metamorphoses);

addBookToLibrary(aeneid);
