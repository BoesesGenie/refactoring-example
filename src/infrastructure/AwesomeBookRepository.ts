import awesomeProducerData from '../data/awesome_producer.json';
import BookRepository from '../models/BookRepository';
import Book from '../models/Book';
import BookCollection from "../models/BookCollection";

export default class AwesomeBookRepository implements BookRepository {
  all = () => {
    return new BookCollection(
      awesomeProducerData.map((rawBook) => {
        return new Book(
          rawBook.name,
          rawBook.author,
          rawBook.price / 1000000
        );
      })
    );
  };
}
