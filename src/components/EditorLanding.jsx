import React from "react";
import "./EditorLanding.css";

function EditorLanding({ createNote }) {
  return (
    <section className="editor--landing">
      <div className="editor--landing--wrapper">
        <h2>Theres no notes now. Lets make some! </h2>
        <p>
          Create a note by pressing the button below or the plus button on the
          sidebar
        </p>
        <button
          type="button"
          className="editor--landing--button"
          onClick={createNote}
        >
          Create new Note
        </button>
      </div>
    </section>
  );
}

export default EditorLanding;
