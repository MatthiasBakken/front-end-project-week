export const ADD_NOTE = 'ADD_NOTE';
export const EDIT_NOTE = 'EDIT_NOTE';
export const REMOVE_NOTE = 'REMOVE_NOTE';

let noteID = 2;

export const addNote = note => {
    noteID++;
    return {
        type: ADD_NOTE,
        payload: {
            id: noteID,
            title: note.title,
            body: note.body
        }
    };
};

export const editNote = (id) => {
    return {
        type: EDIT_NOTE,
        payload: id
    };
};

export const removeNote = (id) => {
    return {
        type: REMOVE_NOTE,
        payload: id
    };
};