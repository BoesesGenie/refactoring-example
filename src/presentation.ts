export default function presentation(asHtml: boolean, data) {
  if (!asHtml) {
    return `
'''
Author: ${data.author};
Name: ${data.name};
Amount: $${data.amount};
'''
`;
  }

  return `
<div>
<p>Author: ${data.author};</p>
<p>Name: ${data.name};</p>
<p>Amount: $${data.amount};</p>
</div>
`;
}
