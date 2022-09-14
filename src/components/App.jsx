import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Note from "./Note.jsx";
import notes from "../notes.js";

function createNote(note) {
  return (
    <Note 
      key = {note.key}
      heading = {note.title}
      desc = {note.content}
    />
  )
} 

function App() {
    return (
       <div> 
         <Header />
         {notes.map(createNote)}
         <Footer />
       </div> 
    )
}

export default App;