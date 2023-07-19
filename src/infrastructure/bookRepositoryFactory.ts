import BookRepositoryComposite from './BookRepositoryComposite';
import AwesomeBookRepository from './AwesomeBookRepository';
import AnotherBookRepository from './AnotherBookRepository';

export default function bookRepositoryFactory () {
  const bookRepository = new BookRepositoryComposite();

  bookRepository.addRepository(new AwesomeBookRepository());
  bookRepository.addRepository(new AnotherBookRepository());

  return bookRepository;
};
