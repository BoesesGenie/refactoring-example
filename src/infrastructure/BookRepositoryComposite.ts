import BookRepository from '../models/BookRepository';
import BookCollection from "../models/BookCollection";

export default class BookRepositoryComposite implements BookRepository {
  private readonly repositories = new Set<BookRepository>();

  addRepository = (bookRepository: BookRepository) => {
    this.repositories.add(bookRepository);
  };

  all = () => {
    let result = new BookCollection([]);

    this.repositories.forEach((bookRepository) => {
      result = result.concat(bookRepository.all());
    });

    return result;
  }
}
