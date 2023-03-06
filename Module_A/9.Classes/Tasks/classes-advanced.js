class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  get title() {
    return this._title;
  }

  set title(value) {
    this._title = value;
  }

  get author() {
    return this._author;
  }

  set author(value) {
    this._author = value;
  }
}

const book = new Book('The Hobbit', 'J.R.R. Tolkien');

console.log(book.title);
console.log(book.author);