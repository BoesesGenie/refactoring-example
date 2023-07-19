import fetchBooks from './infrastructure/fetchBooks';
import presentation from './presentation';

export default function main(asHtml = false) {
  let output = '';

  fetchBooks().forEach((book) => {
    output += presentation(asHtml, book);
  });

  return output;
}
