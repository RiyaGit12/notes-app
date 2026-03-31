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
