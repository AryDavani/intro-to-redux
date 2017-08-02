import React, { Component } from 'react';
import '../App.css';
import BookList from '../containers/BookList';
import BookDetail from '../containers/BookDetail';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <BookList />
          <BookDetail />
        </div>
      </div>
    );
  }
}

export default App;
