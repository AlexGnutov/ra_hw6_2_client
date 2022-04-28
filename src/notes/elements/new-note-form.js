import {useRef} from "react";
import PropTypes from "prop-types";

function NewNoteForm(props) {
    const textareaRef = useRef();
    const {onSubmit} = props;

    const onSubmitHandler = (e) => {
        e.preventDefault();
        onSubmit({
            content: textareaRef.current.value,
        });
    }

    return (
        <form className={'notes-form'} onSubmit={onSubmitHandler}>
            <div className={'notes-form-element'}>
                <textarea className={'notes-form-textarea'} ref={textareaRef}/>
            </div>
            <div className={'notes-form-element'}>
                <button>Add</button>
            </div>
        </form>
    )
}

NewNoteForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}

export default NewNoteForm;
