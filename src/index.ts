import bookRepositoryFactory from './infrastructure/bookRepositoryFactory';
import presentation from './presentation';

export default function main(asHtml = false) {
  return bookRepositoryFactory().all().reduce((output, book) => {
    output += presentation(asHtml, book);

    return output;
  }, '');
};
