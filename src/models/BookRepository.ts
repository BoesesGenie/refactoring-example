import Book from './Book';

export default interface BookRepository {
  all(): Book[];
}
