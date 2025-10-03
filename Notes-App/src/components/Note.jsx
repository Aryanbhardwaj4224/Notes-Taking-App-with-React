import React from "react";

function Note({ id, text, deleteHandel }) {
  return (
    <>
      <div className="note">
        <p> {text}</p>
        <button className="del_btn" onClick={()=>deleteHandel(id)}>Delete</button>
      </div>
    </>
  );
}

export default Note;
