import React, { Component } from 'react';
import Book from '../models/Book';

interface BookListProps {
  books: Book[];
}

class BookList extends Component <BookListProps> {
  render() {
    return (
      this.props.books.map(book => {
        return (
          <div>
            <h1>
              { book.title }
            </h1>
            <img src = {book.identifiers[0].thumbnail} alt = "thumbnail"></img>
            <h2>
              { book.edition } by { book.author }
            </h2>
          </div>
        );
      })
    );
  }
}

export default BookList;
