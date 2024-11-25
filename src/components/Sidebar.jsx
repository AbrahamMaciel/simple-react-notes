import React from "react";
import "./Sidebar.css";

function Sidebar({ notes, currentNoteId, setCurrentNoteId }) {
  const noteElements = notes.map((note) => {
    return (
      <div
        className={`sidebar--note ${note.id === currentNoteId ? "active" : ""}`}
        key={note.id}
        onClick={() => setCurrentNoteId(note.id)}
      >
        {note.body}
      </div>
    );
  });

  return (
    <section className="sidebar">
      <div className="sidebar--header">
        <h2>Notes</h2>
        <button type="button" className="sidebar--button">
          +
        </button>
      </div>
      <div className="sidebar--notes">{noteElements}</div>
    </section>
  );
}

export default Sidebar;
