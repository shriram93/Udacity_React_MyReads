import React from 'react';
import Book from '../book/book';

const Shelf = ({ name, value, books, shelfChange }) => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{name}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        {books.map((book) => {
          if (book.shelf === value)
            return (
              <li key={book.id}>
                <Book
                  shelf={book.shelf}
                  thumbnail={book.imageLinks.smallThumbnail}
                  title={book.title}
                  authors={book.authors}
                  shelfChange={(e) => shelfChange(book, e.target.value)} />
              </li>)
          else
            return null
        })}
      </ol>
    </div>
  </div>
)


export default Shelf