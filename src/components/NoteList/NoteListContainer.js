import { connect } from 'react-redux';
import NoteList from './NoteList';
import { notesSelectors, notesActions } from '../../modules/notes';

const mapStateToProps = state => ({
  notes: notesSelectors.getFilteredNotes(state),
});

const mapDispatchToProps = {
  deleteNote: notesActions.deleteNote,
  toggleNote: notesActions.toggleNote,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NoteList);
