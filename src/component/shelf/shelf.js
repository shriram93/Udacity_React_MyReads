import React from 'react';
import Book from '../book/book';

const Shelf = (props) => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{props.name}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        {props.books.map((book) => {
          if (book.shelf === props.value)
            return (
              <li key={book.id}>
                <Book
                  shelf={book.shelf}
                  thumbnail={book.imageLinks.smallThumbnail}
                  title={book.title}
                  authors={book.authors}
                  shelfChange={(e) => props.shelfChange(book, e.target.value)} />
              </li>)
          else
            return null
        })}
      </ol>
    </div>
  </div>
)


export default Shelf