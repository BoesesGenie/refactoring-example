import awesomeProducerData from './data/awesome_producer.json';
import anotherProducerData from './data/another_producer.json';

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
        data = {
          name: books[i].name,
          author: books[i].author,
          amount: books[i].price / 1000000,
        }
        break;
      case 'another':
        data = {
          // @ts-ignore
          name: books[i].title,
          author: books[i].author,
          // @ts-ignore
          amount: books[i].amount - books[i].amount / 100 * books[i].discount,
        }
        break;
    }

    if (!asHtml) {
        output += `
'''
Author: ${data.author};
Name: ${data.name};
Amount: $${data.amount};
'''
`;
      continue;
    }
      output += `
<div>
<p>Author: ${data.author};</p>
<p>Name: ${data.name};</p>
<p>Amount: $${data.amount};</p>
</div>
`;
  }

  return output;
}
