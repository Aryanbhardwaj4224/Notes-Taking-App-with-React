import React, { useEffect, useState } from "react";
import CreateNote from "./CreateNote";
import { v4 as uuid } from "uuid";
import Note from "./Note";
import './style.css'
function Notes() {
  const [notes, setNotes] = useState(() => {
    const data = JSON.parse(localStorage.getItem("mydata"));
    return data || [];
  });

  const [inputText, setInputText] = useState("");

  const TextHandeler = (event) => {
    setInputText(event.target.value);
  };

  const SaveHandler = () => {
    setNotes((prevState) => [
      ...prevState,
      {
        id: uuid(),
        text: inputText,
      },
    ]);
    setInputText("");
  };

  const deleteHandel = (id)=>{
    const FilterNotes = notes.filter((note)=>note.id!==id)
    setNotes(FilterNotes);
  }
  useEffect(() => {
    localStorage.setItem("mydata", JSON.stringify(notes));
  });
  return (
    <>
      <div className="notes">
        {notes.map((item) => (
          <Note key={item.id} id={item.id} text={item.text}  deleteHandel={deleteHandel}/>
        ))}
        <CreateNote
          TextHandeler={TextHandeler}
          SaveHandler={SaveHandler}
          inputText={inputText}
        />
      </div>
    </>
  );
}

export default Notes;
