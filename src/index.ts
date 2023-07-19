import BookRepositoryComposite from './infrastructure/BookRepositoryComposite';
import presentation from './presentation';

export default function main(asHtml = false) {
  return new BookRepositoryComposite().all().reduce((output, book) => {
    output += presentation(asHtml, book);

    return output;
  }, '');
}
