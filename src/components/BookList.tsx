import React, { Component } from 'react';
import Book from '../models/Book';
import booksResponse from '../api/booksResponse.json';

const books : Book[]  = booksResponse;

class BookList extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      books,
    };
  }

  render() {
    // TODO Replace with PropTypes
    // state has to be cast as any because you shouldn't be changing state
    // books should be passed in as props and prop type should be set
    return (
      (this.state as any).books.map((book: Book) => {
        return (
          <div>
            <h1>
              { book.title }
            </h1>
            by { book.author }
          </div>
        );
      })
    );
  }
}

export default BookList;
