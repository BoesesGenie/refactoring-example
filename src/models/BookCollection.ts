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

  asHtml = () => {
    return this.books.reduce((acc, book) => {
      acc += `
<div>
<p>Author: ${book.author};</p>
<p>Name: ${book.name};</p>
<p>Amount: $${book.amount};</p>
</div>
`;
      return acc;
    }, '');
  };

  asPlainText = () => {
    return this.books.reduce((acc, book) => {
      acc += `
'''
Author: ${book.author};
Name: ${book.name};
Amount: $${book.amount};
'''
`;
      return acc;
    }, '');
  };
}
