import Book from './models/Book';

export default function presentation(asHtml: boolean, book: Book) {
    return `
'''
Author: ${book.author};
Name: ${book.name};
Amount: $${book.amount};
'''
`;
}
