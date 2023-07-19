import Book from './models/Book';

export default function presentation(asHtml: boolean, book: Book) {
  if (!asHtml) {
    return `
'''
Author: ${book.author};
Name: ${book.name};
Amount: $${book.amount};
'''
`;
  }

  return `
<div>
<p>Author: ${book.author};</p>
<p>Name: ${book.name};</p>
<p>Amount: $${book.amount};</p>
</div>
`;
}
