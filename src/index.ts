import awesomeProducerData from './data/awesome_producer.json';
import anotherProducerData from './data/another_producer.json';
import Book from './models/Book';
import presentation from './presentation';

export default function main(asHtml = false) {
  let output = '';
  // @ts-ignore
  const books = awesomeProducerData.concat(anotherProducerData);

  for (let i = 0; i < books.length; i++) {
    let dataType = 'another';
    let data;

    if (books[i].price) {
      dataType = 'awesome';
    }

    switch (dataType) {
      case 'awesome':
        data = new Book(
          books[i].name,
          books[i].author,
          books[i].price / 1000000
        );
        break;
      case 'another':
        data = new Book(
          // @ts-ignore
          books[i].title,
          books[i].author,
          // @ts-ignore
          books[i].amount - books[i].amount / 100 * books[i].discount
        );
        break;
    }

    output += presentation(asHtml, data);
  }

  return output;
}
