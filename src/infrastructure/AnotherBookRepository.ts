import BookRepository from "../models/BookRepository";
import anotherProducerData from "../data/another_producer.json";
import Book from "../models/Book";
import BookCollection from "../models/BookCollection";

export default class AnotherBookRepository implements BookRepository {
  all = () => {
    return new BookCollection(
      anotherProducerData.map((rawBook) => {
        return new Book(
          rawBook.title,
          rawBook.author,
          rawBook.amount - rawBook.amount / 100 * rawBook.discount
        )
      })
    );
  };
}
