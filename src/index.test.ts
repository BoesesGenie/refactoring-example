import priceList from './index';

describe('Price list', () => {
  it('should show prices as plain text', () => {
    const list = priceList();

    expect(list).toEqual(`
'''
Author: Eric Matthes;
Name: Python Crash Course, 3rd Edition: A Hands-On, Project-Based Introduction to Programming;
Amount: $32;
'''

'''
Author: Charles Petzold;
Name: Code: The Hidden Language of Computer Hardware and Software;
Amount: $15;
'''

'''
Author: Aristeidis Bampakos and Pablo Deeleman;
Name: Learning Angular: A no-nonsense guide to building web applications with Angular 15, 4th Edition;
Amount: $10;
'''

'''
Author: David Flanagan;
Name: JavaScript: The Definitive Guide: Master the World's Most-Used Programming Language;
Amount: $30.4;
'''

'''
Author: Marijn Haverbeke;
Name: Eloquent JavaScript, 3rd Edition: A Modern Introduction to Programming;
Amount: $14.25;
'''

'''
Author: Eric Freeman and Elisabeth Robson;
Name: Head First JavaScript Programming: A Brain-Friendly Guide;
Amount: $9.5;
'''
`);
  });

  it('should show prices as HTML', () => {
    const list = priceList(true);

    expect(list).toEqual(`
<div>
<p>Author: Eric Matthes;</p>
<p>Name: Python Crash Course, 3rd Edition: A Hands-On, Project-Based Introduction to Programming;</p>
<p>Amount: $32;</p>
</div>

<div>
<p>Author: Charles Petzold;</p>
<p>Name: Code: The Hidden Language of Computer Hardware and Software;</p>
<p>Amount: $15;</p>
</div>

<div>
<p>Author: Aristeidis Bampakos and Pablo Deeleman;</p>
<p>Name: Learning Angular: A no-nonsense guide to building web applications with Angular 15, 4th Edition;</p>
<p>Amount: $10;</p>
</div>

<div>
<p>Author: David Flanagan;</p>
<p>Name: JavaScript: The Definitive Guide: Master the World's Most-Used Programming Language;</p>
<p>Amount: $30.4;</p>
</div>

<div>
<p>Author: Marijn Haverbeke;</p>
<p>Name: Eloquent JavaScript, 3rd Edition: A Modern Introduction to Programming;</p>
<p>Amount: $14.25;</p>
</div>

<div>
<p>Author: Eric Freeman and Elisabeth Robson;</p>
<p>Name: Head First JavaScript Programming: A Brain-Friendly Guide;</p>
<p>Amount: $9.5;</p>
</div>
`);
  });
});
