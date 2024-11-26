import React from "react";
import "./Sidebar.css";
import bin from "../assets/images/bin.png";

function Sidebar({ notes, currentNote, setCurrentNoteId, createNote, deleteNote }) {
  const noteElements = notes.map((note) => {
    return (
      <div
        className={`sidebar--note ${note.id === currentNote.id ? "active" : ""}`}
        onClick={() => setCurrentNoteId(note.id)}
        key={note.id}
      >
        {/* Well this line here makes that only the characters on the note body's only get shown up to their newline character (\n) which is only visible for the code(?) since it cannot be previewed on the markdown editor. */}
        <h4>
          {note.body.split("\n")[0]} <img src={bin} alt="trashBin icon" onClick={(event)=>{deleteNote(event, note.id)}}/>
        </h4>
      </div>
    );
  });

  return (
    <section className="sidebar">
      <div className="sidebar--header">
        <h2>Notes</h2>
        <button
          type="button"
          className="sidebar--button"
          onClick={() => createNote()}
        >
          +
        </button>
      </div>
      <div className="sidebar--notes">{noteElements}</div>
    </section>
  );
}

export default Sidebar;
