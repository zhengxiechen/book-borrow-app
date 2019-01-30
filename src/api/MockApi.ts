import booksResponse from './booksResponse.json';
import Book from '../models/Book';
import BookGrapApi from './BookGrapApi';

export default class MockApi implements BookGrapApi{
  private books: Book[] = booksResponse;

  getBooks(): Book[] {
    return this.books;
  }

  /*getBook(id: number): Book {
    return this.books[id];
  }*/
}
