import bookRepositoryFactory from './infrastructure/bookRepositoryFactory';

export default function main(asHtml = false) {
  const books = bookRepositoryFactory().all();

  if (asHtml) {
    return books.asHtml();
  }

  return books.asPlainText();
};
