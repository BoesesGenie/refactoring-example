import awesomeProducerData from './data/awesome_producer.json';
import anotherProducerData from './data/another_producer.json';

export default function main(asHtml = false) {
  let output = '';
  // @ts-ignore
  const arr = awesomeProducerData.concat(anotherProducerData);

  for (let i = 0; i < arr.length; i++) {
    let dataType = 'another';
    let data;

    if (arr[i].price) {
      dataType = 'awesome';
    }

    switch (dataType) {
      case 'awesome':
        data = {
          name: arr[i].name,
          author: arr[i].author,
          amount: arr[i].price / 1000000,
        }
        break;
      case 'another':
        data = {
          // @ts-ignore
          name: arr[i].title,
          author: arr[i].author,
          // @ts-ignore
          amount: arr[i].amount - arr[i].amount / 100 * arr[i].discount,
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
