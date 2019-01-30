import Book from '../models/Book';

export default interface BookGrapApi {
  getBooks(): Book[];
  // getBook(id: number): Book;
}
