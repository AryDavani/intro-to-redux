import { combineReducers } from 'redux';
import BooksReducer from './reducer_books.js';
import SelectedBook from './reducer_selectedBook.js';


const rootReducer = combineReducers({
  books: BooksReducer,
  selectedBook: SelectedBook
})


export default rootReducer;
