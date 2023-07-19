import BookCollection from './BookCollection';

export default interface BookRepository {
  all(): BookCollection;
}
