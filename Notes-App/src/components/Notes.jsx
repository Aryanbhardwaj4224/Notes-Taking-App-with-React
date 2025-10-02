import React, { useState } from "react";
import CreateNote from "./CreateNote";
import { v4 as uuid } from "uuid";
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
        id: uuid,
        text: inputText,
      },
    ])
    setInputText('')
  };
  return (
    <>
      <div className="notes">
        <CreateNote TextHandeler={TextHandeler} SaveHandler={SaveHandler} inputText={inputText}/>
      </div>
    </>
  );
}

export default Notes;
