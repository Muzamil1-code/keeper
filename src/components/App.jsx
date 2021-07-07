import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [borrownotes, setborrownotes] = useState([]);

  function deletenotefromapp(id) {
    setborrownotes((previousnotes) => {
      return previousnotes.filter((noteitems, index) => {
        return index !== id;
      });
    });
  }
  function getnote(note) {
    setborrownotes((previous) => {
      return [...previous, note];
    });
  }
  return (
    <div>
      <Header />
      <CreateArea takenote={getnote} />
      {borrownotes.map((noteitems, index) => {
        return (
          <Note
            key={index}
            id={index}
            callfromnote={deletenotefromapp}
            title={noteitems.title}
            content={noteitems.content}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
