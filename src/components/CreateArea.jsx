import React, { useState } from "react";

function CreateArea(props) {
  const [note, setnote] = useState({
    title: "",
    content: ""
  });
  const [content, setcontent] = useState("");
  function noteshandle(event) {
    const { name, value } = event.target;

    setnote((prevnote) => {
      return {
        ...prevnote,
        [name]: value
      };
    });
  }
  function addnote(event) {
    props.takenote(note);
    setnote({
      //used to clear title and content once add button is clicked
      title: "",
      content: ""
    });
    event.preventDefault();
  }
  return (
    <div>
      <form>
        <input
          onChange={noteshandle}
          name="title"
          placeholder="Title"
          value={note.title}
        />
        <textarea
          onChange={noteshandle}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
        />
        <button onClick={addnote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
