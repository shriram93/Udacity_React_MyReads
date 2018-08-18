import React from 'react';

const Book = ({shelf, thumbnail, title, authors, shelfChange }) => (
  <div className="book">
    <div className="book-top">
      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${thumbnail})` }}></div>
      <div className="book-shelf-changer">
        <select value={shelf || "none"} onChange={shelfChange}>
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    </div>
    <div className="book-title">{title}</div>
    <div className="book-authors">
      <ul>
        {authors.map((author) =>
          (<li key={author}>{author}</li>)
        )}
      </ul>
    </div>
  </div>
)

export default Book