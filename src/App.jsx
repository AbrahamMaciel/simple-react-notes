import React from "react";
import "./App.css";
// I was using react-split but it kept glitching the widths after re-rendering the editor and i couldn't figure out so i replaced it with this one
import Split from "@uiw/react-split";
import Sidebar from "./components/Sidebar";
import Editor from "./components/Editor";
import { nanoid } from "nanoid";
import EditorLanding from "./components/EditorLanding";

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

  // const [notes, setNotes] = React.useState([])

  const [currentNoteId, setCurrentNoteId] = React.useState(notes[0]?.id || "");
  const currentNote =
    notes.find((note) => note.id === currentNoteId) || notes[0];

  function updateNote(text) {
    //I really wonder why if i put the newNotes declaration here it gets duplicated as if the function were remembering the state when it should be deleted already, must be sometimg about javascript callbacks or react. It really bothers me not being able to decipher it. Maybe some day.

    setNotes((prevNotes) => {
      const newNotes = [];
      prevNotes.forEach((note) => {
        if (note.id === currentNoteId) {
          //Added 'unshift' so that the latest modified note gets first on the sidebar
          newNotes.unshift({ ...note, body: text });
        } else {
          newNotes.push(note);
        }
      });

      return newNotes;
    });
  }

  function createNote() {
    const newNote = {
      id: nanoid(),
      body: `# Note ${notes.length}`,
    };

    setNotes((prevNotes) => [newNote, ...prevNotes]);
    setCurrentNoteId(newNote.id);
  }

  function deleteNote(event, noteId) {
    event.stopPropagation();
    setNotes((oldNotes) => oldNotes.filter((note) => note.id !== noteId));
  }

  return (
    <>
      <main>
        <Split
          renderBar={({ onMouseDown, ...props }) => {
            return (
              <div
                {...props}
                style={{ width: "6px", backgroundColor: "steelblue", boxShadow: 'none'}}
              >
                <div onMouseDown={onMouseDown} style={{ boxShadow: "none" }} />
              </div>
            );
          }}
        >
          <Sidebar
            notes={notes}
            currentNote={currentNote}
            setCurrentNoteId={setCurrentNoteId}
            createNote={createNote}
            deleteNote={deleteNote}
            //For some reason min-width doesn't seem to work with this component while it worked for simple ones
          />
          {notes.length > 0 ? (
            <Editor currentNote={currentNote} updateNote={updateNote} />
          ) : (
            <EditorLanding createNote={createNote}/>
          )}
        </Split>

      </main>
    </>
  );
}

export default App;
