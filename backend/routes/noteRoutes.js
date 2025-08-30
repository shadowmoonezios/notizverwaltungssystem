const express = require('express');
const Note = require('../models/note');
const router = express.Router();

// Alle Notizen abrufen
router.get('/', async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
});

// Notiz erstellen
router.post('/', async (req, res) => {
  const { title, content } = req.body;
  const newNote = new Note({ title, content });
  await newNote.save();
  res.json(newNote);
});

// Notiz bearbeiten
router.put('/:id', async (req, res) => {
  const { title, content } = req.body;
  const updatedNote = await Note.findByIdAndUpdate(req.params.id, { title, content }, { new: true });
  res.json(updatedNote);
});

// Notiz löschen
router.delete('/:id', async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);
  res.json({ message: 'Notiz gelöscht' });
});

module.exports = router;