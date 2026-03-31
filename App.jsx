// import React, { useState, useEffect } from 'react'
// import axios from 'axios'
// import './App.css'

// const API_BASE = 'http://127.0.0.1:5000'

// function App() {
//   // State for notes list
//   const [notes, setNotes] = useState([])
//   // State for new note input
//   const [title, setTitle] = useState('')
//   const [content, setContent] = useState('')
//   // State for error messages
//   const [error, setError] = useState('')

//   // Fetch notes when component mounts
//   useEffect(() => {
//     fetchNotes()
//   }, [])

//   // Function to fetch all notes from backend
//   const fetchNotes = async () => {
//     try {
//       const response = await axios.get(`${API_BASE}/notes`)
//       setNotes(response.data)
//       setError('') // Clear any previous errors
//     } catch (error) {
//       console.error('Error fetching notes:', error)
//       setError('Failed to load notes. Please check if the backend is running.')
//     }
//   }

//   // Function to add a new note
//   const addNote = async () => {
//     if (!title.trim() || !content.trim()) {
//       setError('Please enter both title and content.')
//       return
//     }
//     try {
//       await axios.post(`${API_BASE}/notes`, { title: title.trim(), content: content.trim() })
//       setTitle('')
//       setContent('')
//       setError('') // Clear error on success
//       fetchNotes() // Refresh the notes list
//     } catch (error) {
//       console.error('Error adding note:', error)
//       setError('Failed to add note. Please try again.')
//     }
//   }

//   // Function to delete a note
//   const deleteNote = async (id) => {
//     try {
//       await axios.delete(`${API_BASE}/notes/${id}`)
//       setError('') // Clear error on success
//       fetchNotes() // Refresh the notes list
//     } catch (error) {
//       console.error('Error deleting note:', error)
//       setError('Failed to delete note. Please try again.')
//     }
//   }

//   return (
//     <div className="app">
//       <h1>Notes App</h1>
      
//       {/* Display error messages */}
//       {error && <p className="error">{error}</p>}
      
//       {/* Form to add new note */}
//       <div className="add-note">
//         <input
//           type="text"
//           placeholder="Note Title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />
//         <textarea
//           placeholder="Note Content"
//           value={content}
//           onChange={(e) => setContent(e.target.value)}
//         />
//         <button onClick={addNote}>Add Note</button>
//       </div>
      
//       {/* Display all notes */}
//       <div className="notes-list">
//         {notes.map(note => (
//           <div key={note.id} className="note">
//             <h3>{note.title}</h3>
//             <p>{note.content}</p>
//             <button onClick={() => deleteNote(note.id)}>Delete</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default App
import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const API = "http://127.0.0.1:5000/notes";

  const fetchNotes = async () => {
    const res = await axios.get(API);
    setNotes(res.data);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const addNote = async () => {
    if (!title || !content) return;

    await axios.post(API, { title, content });
    setTitle("");
    setContent("");
    fetchNotes();
  };

  const deleteNote = async (id) => {
    await axios.delete(`${API}/${id}`);
    fetchNotes();
  };

  return (
    <div className="app">
      <h1>Notes App</h1>

      <div className="add-note">
        <input
          placeholder="Note Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Note Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <button onClick={addNote}>Add Note</button>
      </div>

      <div className="notes-list">
        {notes.length === 0 ? (
          <p>No notes yet</p>
        ) : (
          notes.map((note) => (
            <div key={note.id} className="note">
              <h3>{note.title}</h3>
              <p>{note.content}</p>
              <button onClick={() => deleteNote(note.id)}>Delete</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;