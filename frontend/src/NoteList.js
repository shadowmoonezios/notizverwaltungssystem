import React from 'react';

function NoteList({ notes, deleteNote }) {
  return (
    <ul>
      {notes.map(note => (
        <li key={note._id}>
          <h2>{note.title}</h2>
          <p>{note.content}</p>
          <button onClick={() => deleteNote(note._id)}>Löschen</button>
        </li>
      ))}
    </ul>
  );
}

export default NoteList;