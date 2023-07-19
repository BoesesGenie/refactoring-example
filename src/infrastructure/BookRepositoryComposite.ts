import BookRepository from '../models/BookRepository';
import AwesomeBookRepository from './AwesomeBookRepository';
import AnotherBookRepository from './AnotherBookRepository';

export default class BookRepositoryComposite implements BookRepository {
  all = () => {
    return new AwesomeBookRepository()
      .all()
      .concat(new AnotherBookRepository().all());
  }
}
