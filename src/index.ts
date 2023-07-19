import fetchBooks from './infrastructure/fetchBooks';
import presentation from './presentation';

export default function main(asHtml = false) {
  return fetchBooks().reduce((output, book) => {
    output += presentation(asHtml, book);

    return output;
  }, '');
}
