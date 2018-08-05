import React from 'react'
import * as BooksAPI from './BooksAPI'
import ListBooks from './components/listBooks/listBooks';
import SearchBooks from './components/searchBooks/searchBooks';
import { Route } from 'react-router-dom'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState({
          books
        })
      })
  }

  onShelfChange = (book, newShelf) => {
    BooksAPI.update(book, newShelf)
      .then((res) => {
        this.setState((prevState) => {
          const books = [...prevState.books];
          const bookindex = books.findIndex((b) => b.id === book.id)
          if (bookindex !== -1) {
            books[bookindex].shelf = newShelf;
          }
          else {
            BooksAPI.get(book.id)
              .then((res) => {
                if (!res.error)
                  books.push(res)
              })
          }
          return {
            books
          }
        })
      })
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <ListBooks books={this.state.books} shelfChange={this.onShelfChange} />
        )} />
        <Route path='/search' render={({ history }) => (
          <SearchBooks currentBooks={this.state.books} shelfChange={this.onShelfChange} />
        )}
        />
      </div>
    )
  }
}

export default BooksApp
