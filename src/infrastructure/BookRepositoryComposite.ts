import BookRepository from '../models/BookRepository';

export default class BookRepositoryComposite implements BookRepository {
  private readonly repositories = new Set<BookRepository>();

  addRepository = (bookRepository: BookRepository) => {
    this.repositories.add(bookRepository);
  };

  all = () => {
    let result = [];

    this.repositories.forEach((bookRepository) => {
      result = result.concat(bookRepository.all());
    });

    return result;
  }
}
