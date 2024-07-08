// implement a library function with classes

class Library {
  // books is book[]
  constructor(books) {
    this.books = books;
  }
  addBook(book) {
    // takes a book instance
    // append a new book to this.books
    this.books.push(book);
  }
  removeBook(isbn) {
    // is title unique?
    // if it's a user exposed api they would probably want title, but we can use isbn on the backend
    //      as isbn is a unique key
    // go through the books, find the one with the right isbn and remove it
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].isbn === isbn) {
        this.books.splice(i, 1); // splices out the found index in place
      }
    }
    // currently returns/throws nothing if the book isn't there. Maybe we should do something
  }
}

class Book {
  constructor(title, author, genre, pages, isbn, openPage = 0) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.pages = pages;
    this.isbn = isbn;

    this.openPage = openPage;
  }

  turnPage(openPage) {
    this.openPage++;
  }
  unTurnPage(openPage) {
    this.openPage--;
  }
}
