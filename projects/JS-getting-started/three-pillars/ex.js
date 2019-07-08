class Bookshelf {
  constructor() {
    this.favoriteBooks = [];
  }

  addFavoriteBook(bookName) {
    if (!bookName.includes('Great')) {
      this.favoriteBooks.push(bookName);
    }
  }

  printFavoriteBooks() {
    console.log(`Favorite Books: ${this.favoriteBooks.length}`);
    for (const bookName of this.favoriteBooks) {
      console.log(String(bookName));
    }
  }
}

const BOOK_API = 'https://some.url/api';

function fakeAjax(url, cb) {
  setTimeout(() => {
    cb([
      'A Song of Ice and Fire',
      'The Great Gatsby',
      'Crime & Punishment',
      'Great Expectations',
      "You Don't Know JS"
    ]);
  }, 500);
}

function loadBooks(bookshelf) {
  fakeAjax(BOOK_API, (books) => {
    for (const book of books) {
      bookshelf.addFavoriteBook(book);
    }
    bookshelf.printFavoriteBooks();
  });
}

const myBooks = new Bookshelf();
loadBooks(myBooks);
