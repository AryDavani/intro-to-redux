import React, {Component} from 'react';
import {connect} from 'react-redux';
import BookList from './BookList';

class BookDetail extends Component {
  constructor() {
    super();
  }
  render(){
    if (!this.props.book) {
      return <p>please select book</p>
    }
    return (
      <div>
        <br/>
        <p>Title: { this.props.book.title }</p>
        <p>number of pages: { this.props.book.pages }</p>
        <p>genre: { this.props.book.genre }</p>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    book: state.selectedBook
  }
}

export default connect(mapStateToProps)(BookDetail)
