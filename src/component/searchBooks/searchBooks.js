import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import * as BooksAPI from '../../BooksAPI'
import Book from '../book/book';

class SearchBooks extends Component {

  state = {
    books: []
  }

  onBookSearch = (e) => {
    if (e.target.value) {
      BooksAPI.search(e.target.value)
        .then((res) => {
          if (res.error)
            this.updateBooks([])
          else {
            const validBooks = res.filter((book) => {
              if (book.id && book.imageLinks && book.imageLinks.smallThumbnail && book.title && book.authors)
                return true
              else
                return false
            })
            validBooks.forEach((book,index) => {              
              this.props.currentBooks.forEach((currentBook) => {
                if(currentBook.id === book.id)
                {
                  validBooks[index].shelf = currentBook.shelf
                }
              })
            } ) 
            this.updateBooks(validBooks)
          }
        })
    }
    else {
      this.updateBooks([])
    }

  }

  updateBooks = (books) => {
    this.setState(
      {
        books
      }
    )
  }


  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to='/'>Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" onChange={this.onBookSearch} placeholder="Search by title or author" />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.books && this.state.books.map((book) => (
              <li key={book.id}>
                <Book
                  shelf={book.shelf}
                  thumbnail={book.imageLinks.smallThumbnail}
                  title={book.title}
                  authors={book.authors}
                  shelfChange={(e) => this.props.shelfChange(book, e.target.value)} />
              </li>
            ))}
          </ol>
        </div>
      </div>)
  }

}

export default SearchBooks