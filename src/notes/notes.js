import NewNoteForm from "./elements/new-note-form";
import NotesList from "./elements/notes-list";
import MainBar from "./elements/main-bar";
import {useState} from "react";

const URL = 'https://hw6-2server.herokuapp.com';
const sampleData =[
    {
        id: 1,
        content: "First Note"
    },
    {
        id: 2,
        content: "First Note"
    },
    {
        id: 3,
        content: "First Note"
    },
    {
        id: 4,
        content: "First Note"
    }
];

function Notes(props) {
    const [notes, setNotes] = useState(sampleData);

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
