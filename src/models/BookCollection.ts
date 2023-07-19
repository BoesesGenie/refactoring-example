import Book from './Book';

export default class BookCollection {
  private readonly books: Book[];

  constructor(books: Book[]) {
    this.books = books.slice();
  }

  reduce = <T>(cb: (out: T, book: Book) => T, acc: T) => {
    return this.books.reduce(cb, acc);
  };

  concat = (collection: BookCollection) => {
    return new BookCollection(this.books.concat(collection.books));
  };
}