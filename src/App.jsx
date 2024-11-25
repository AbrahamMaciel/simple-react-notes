import React from "react";
import "./App.css";
import Split from "react-split";
import Sidebar from "./components/Sidebar";
import Editor from "./components/Editor";
import { nanoid } from "nanoid";

function App() {
  const [notes, setNotes] = React.useState([
    {
      id: nanoid(),
      body: "# Type your markdown note's title here",
    },
    {
      id: nanoid(),
      body: "Dis should be second note \n yeah newlinee babeee \n\n\n yes",
    },
    {
      id: nanoid(),
      body: "How 'bout three of em?",
    },
  ]);

  // const [notes, setNotes] = React.useState('')

  const [currentNoteId, setCurrentNoteId] = React.useState(notes[0]?.id || "");
  const currentNote = notes.find((note) => note.id === currentNoteId);

  function updateNote(text) {
    //I really wonder why if i put the newNotes declaration here it gets duplicated as if the function were remembering the state when it should be deleted already, must be sometimg about javascript callbacks or react. It really bothers me not being able to decipher it. Maybe some day.

    setNotes((prevNotes) => {
      const newNotes = [];
      prevNotes.forEach((note) => {
        if (note.id === currentNoteId) {
          newNotes.push({ ...note, body: text });
        } else {
          newNotes.push(note);
        }
      });

      return newNotes;
    });
  }

  return (
    <>
      <main>
        <Split sizes={[35, 65]} direction="horizontal" className="split">
          <Sidebar
            notes={notes}
            currentNoteId={currentNoteId}
            setCurrentNoteId={setCurrentNoteId}
          />
          {/* <Editor /> */}
          <Editor currentNote={currentNote} updateNote={updateNote} />
        </Split>
      </main>
    </>
  );
}

export default App;
