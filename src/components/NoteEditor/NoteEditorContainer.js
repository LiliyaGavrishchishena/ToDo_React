import { connect } from 'react-redux';
import { notesActions } from '../../modules/notes';
import NoteEditor from './NoteEditor';

const mapDispatchToProps = { addNote: notesActions.addNote };

export default connect(
  null,
  mapDispatchToProps,
)(NoteEditor);
