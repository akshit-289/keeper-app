import React, { useState } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Note from "./Note.jsx";
import CreateArea from "./CreateArea";
      
function App() {

    const [notes, setNotes] = useState([]);

    function addNote(newNote){
        setNotes(prevItems => {
           return [...prevItems, newNote];
        });
    }

    function deleteNote(id) {
      setNotes(prevItems => {
       return prevItems.filter((item, index) => {
             return index !== id;
        });
      });
    }

    return (
       <div> 
         <Header />
         <CreateArea onAdd={addNote} />
         {notes.map((note, index) => {
          return (<Note 
                    id = {index}
                    key = {index}
                    title = {note.title}
                    content = {note.content}
                    onDelete = {deleteNote}
                  />
                 );
         })}
         <Footer />
       </div> 
    )
}

export default App;


