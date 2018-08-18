import React, { Component } from 'react';
import Shelf from '../shelf/shelf';
import { Link } from 'react-router-dom';

class ListBooks extends Component {
  render() {
    const { books, shelfChange} = this.props;
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Shelf name="Currently Reading" value="currentlyReading" books={books} shelfChange={shelfChange} />
            <Shelf name="Want to Read" value="wantToRead" books={books} shelfChange={shelfChange} />
            <Shelf name="Read" value="read" books={books} shelfChange={shelfChange} />
          </div>
        </div>
        <div className="open-search">
          <Link to='/search'>Add a book</Link>
        </div>
      </div>
    )
  }
}

export default ListBooks
