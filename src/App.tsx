import React, { Component } from 'react';
import './App.css';
import BookGrapApi from './api/BookGrapApi';
import MockApi from './api/MockApi';
import BookList from './components/BookList';

class App extends Component {
  private api: BookGrapApi = new MockApi;

  render() {
    return (
      <div className="App">
        <BookList books={this.api.getBooks()}/>
      </div>
    );
  }
}

export default App;
