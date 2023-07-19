import BookRepositoryComposite from './infrastructure/BookRepositoryComposite';
import AwesomeBookRepository from './infrastructure/AwesomeBookRepository';
import AnotherBookRepository from './infrastructure/AnotherBookRepository';
import presentation from './presentation';

export default function main(asHtml = false) {
  const bookRepository = new BookRepositoryComposite();

  bookRepository.addRepository(new AwesomeBookRepository());
  bookRepository.addRepository(new AnotherBookRepository());

  return bookRepository.all().reduce((output, book) => {
    output += presentation(asHtml, book);

    return output;
  }, '');
};
