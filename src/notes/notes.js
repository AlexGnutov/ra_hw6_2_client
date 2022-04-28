import NewNoteForm from "./elements/new-note-form";
import NotesList from "./elements/notes-list";
import MainBar from "./elements/main-bar";
import {useEffect, useState} from "react";

const URL = 'https://hw6-2server.herokuapp.com';

function Notes(props) {
    const [notes, setNotes] = useState([]);

    useEffect(()=> {
        getNotes();
    }, []);


    const getNotes = () => {
        fetch(URL + '/notes')
            .then(res => res.json())
            .then(data =>
                setNotes(data))
    }

    const createNote = (data) => {
        fetch(URL + '/notes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        }).then(res => {
            if (res.status === 204) {
                getNotes();
            }
        });
    }
    const deleteNote = (id) => {
        fetch(URL + `/notes/${id}`, {
            method: 'DELETE',
        }).then(res => {
            if (res.status === 204) {
                getNotes();
            }
        });
    }

    return (
        <div className={'notes-application'}>
            <MainBar onRefreshClick={getNotes}/>
            <NotesList notes={notes} onDeleteClick={deleteNote}/>
            <NewNoteForm onSubmit={createNote}/>
        </div>
    )
}

export default Notes;
