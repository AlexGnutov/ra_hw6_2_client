import Note from "./note";
import PropTypes from "prop-types";

function NotesList(props) {
    const {notes, onDeleteClick} = props;

    return (
        <div className={'notes-list'}>
            {notes.map(data =>
                <div key={data.id} className={'notes-note'}>
                    <Note data={data} onDeleteClick={onDeleteClick}/>
                </div>
            )}
        </div>
    )
}

NotesList.propTypes = {
    notes: PropTypes.array.isRequired,
    onDeleteClick: PropTypes.func,
}

export default NotesList;
