import awesomeProducerData from '../data/awesome_producer.json';
import anotherProducerData from '../data/another_producer.json';
import Book from '../models/Book';
import BookRepository from '../models/BookRepository';

export default class BookRepositoryComposite implements BookRepository {
  all = () => {
    // @ts-ignore
    const rawBooks = awesomeProducerData.concat(anotherProducerData);
    const books: Book[] = [];

    for (let i = 0; i < rawBooks.length; i++) {
      let dataType = 'another';
      let book;

      if (rawBooks[i].price) {
        dataType = 'awesome';
      }

      switch (dataType) {
        case 'awesome':
          book = new Book(
            rawBooks[i].name,
            rawBooks[i].author,
            rawBooks[i].price / 1000000
          );
          break;
        case 'another':
          book = new Book(
            // @ts-ignore
            rawBooks[i].title,
            rawBooks[i].author,
            // @ts-ignore
            rawBooks[i].amount - rawBooks[i].amount / 100 * rawBooks[i].discount
          );
          break;
      }

      books.push(book);
    }

    return books;
  }
}
