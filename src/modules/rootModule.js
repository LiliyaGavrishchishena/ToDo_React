import { combineReducers } from 'redux';
import notesReducer from './notes/notesReducer';
import filterReducer from './notes/filterReducer';

export default combineReducers({
  notes: notesReducer,
  filter: filterReducer,
});
