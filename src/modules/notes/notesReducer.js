import notesActionTypes from './notesActionTypes';

function notesReducer(state = [], { type, payload }) {
  switch (type) {
    case notesActionTypes.ADD:
      return [...state, payload];

    case notesActionTypes.REMOVE:
      return state.filter(note => note.id !== payload.id);

    case notesActionTypes.TOGGLE_COMPLETED:
      return state.map(note =>
        note.id === payload.id ? { ...note, completed: !note.completed } : note,
      );

    default:
      return state;
  }
}

export default notesReducer;
