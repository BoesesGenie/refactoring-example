import fetchBooks from './infrastructure/fetchBooks';
import presentation from './presentation';

export default function main(asHtml = false) {
  const books = fetchBooks();
  let output = '';

  books.forEach((book) => {
    output += presentation(asHtml, book);
  });

  return output;
}
