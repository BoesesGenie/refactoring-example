import anotherProducerData from '../data/another_producer.json';
import Book from '../models/Book';
import BookRepository from '../models/BookRepository';
import AwesomeBookRepository from './AwesomeBookRepository';

export default class BookRepositoryComposite implements BookRepository {
  all = () => {
    const rawBooks = anotherProducerData;
    const books: Book[] = new AwesomeBookRepository().all();

    for (let i = 0; i < rawBooks.length; i++) {
      books.push(new Book(
        // @ts-ignore
        rawBooks[i].title,
        rawBooks[i].author,
        // @ts-ignore
        rawBooks[i].amount - rawBooks[i].amount / 100 * rawBooks[i].discount
      ));
    }

    return books;
  }
}
