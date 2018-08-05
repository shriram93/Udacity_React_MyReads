import React from 'react';

const Book = (props) => (
  <div className="book">
    <div className="book-top">
      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${props.thumbnail})` }}></div>
      <div className="book-shelf-changer">
        <select value={props.shelf || "none"} onChange={props.shelfChange}>
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    </div>
    <div className="book-title">{props.title}</div>
    <div className="book-authors">
      <ul>
        {props.authors.map((author) =>
          (<li key={author}>{author}</li>)
        )}
      </ul>
    </div>
  </div>
)

export default Book