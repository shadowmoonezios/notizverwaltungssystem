import React, { useEffect, useState } from 'react';
import NoteForm from './NoteForm';
import NoteList from './NoteList';
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/notes')
      .then(response => response.json())
      .then(data => setNotes(data));
  }, []);

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note._id !== id));
  };

  return (
    <div className="App">
      <h1>Notizverwaltungssystem</h1>
      <NoteForm addNote={addNote} />
      <NoteList notes={notes} deleteNote={deleteNote} />
    </div>
  );
}

export default App;