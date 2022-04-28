import PropTypes from "prop-types";

function Note(props) {
    const {data, onDeleteClick} = props;

    const onDeleteClickHandler = (e) => {
        onDeleteClick(data.id);
    }

    return (
        <>
            <p className={'note-text'}>{data.content}</p>
            <button className={'note-delete-button'}
                    onClick={onDeleteClickHandler}>Delete</button>
        </>
    )
}

Note.propTypes = {
    data: PropTypes.object.isRequired,
    onDeleteClick: PropTypes.func,
}

export default Note;
