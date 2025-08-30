import React, { useState } from 'react';

function NoteForm({ addNote }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:5000/api/notes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, content })
    })
      .then(response => response.json())
      .then(note => {
        addNote(note);
        setTitle('');
        setContent('');
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        value={title} 
        onChange={e => setTitle(e.target.value)} 
        placeholder="Titel" 
        required 
      />
      <textarea 
        value={content} 
        onChange={e => setContent(e.target.value)} 
        placeholder="Inhalt" 
        required 
      />
      <button type="submit">Notiz hinzufügen</button>
    </form>
  );
}

export default NoteForm;