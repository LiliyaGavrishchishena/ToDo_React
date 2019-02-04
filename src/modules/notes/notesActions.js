import shortid from 'shortid';
import notesActionTypes from './notesActionTypes';

const addNote = text => ({
  type: notesActionTypes.ADD,
  payload: {
    id: shortid.generate(),
    text,
    completed: false,
  },
});

const deleteNote = id => ({
  type: notesActionTypes.REMOVE,
  payload: {
    id,
  },
});

const toggleNote = id => ({
  type: notesActionTypes.TOGGLE_COMPLETED,
  payload: {
    id,
  },
});

const filter = text => ({
  type: notesActionTypes.FILTERED,
  payload: {
    filter: text,
  },
});
export default { addNote, deleteNote, toggleNote, filter };
