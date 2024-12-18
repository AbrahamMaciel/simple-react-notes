import React from "react";
import MDEditor, { commands } from "@uiw/react-md-editor";
import './Editor.css'

function Editor({ currentNote, updateNote }) {
  return (
    <section className="editor" data-color-mode="light">
      <MDEditor
        value={currentNote.body}
        className="MDEditor"
        onChange={(text) => updateNote(text)}
        height="100%"
        visibleDragbar={false}
        textareaProps={{
          placeholder: "Write something on your mind, literally",
        }}
        commands={[
          commands.comment,
          commands.bold,
          commands.italic,
          commands.strikethrough,
          commands.hr,
          commands.title,
          commands.divider,
          commands.link,
          commands.quote,
          commands.divider,
          commands.unorderedListCommand,
          commands.orderedListCommand,
          commands.checkedListCommand,
          commands.help,
        ]}
      />
    </section>
  );
}

export default Editor;
