import React from "react";
import "./Editor.css";
import MDEditor, { commands } from "@uiw/react-md-editor";

function Editor() {
  const [value, setValue] = React.useState("");
  return (
    <section className="editor" data-color-mode="light">
      <MDEditor
        value={value}
        onChange={setValue}
        height="100%"
        visibleDragbar={false}
        textareaProps={{
          placeholder: "Please do some shit",
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
