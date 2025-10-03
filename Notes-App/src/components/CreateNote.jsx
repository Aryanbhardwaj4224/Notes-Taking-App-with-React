import React from "react";

function CreateNote({TextHandeler,SaveHandler,inputText}) {
  const charlimit = 200;
  const charleft = charlimit - inputText.length
  return (
    <>
      <div className="note">
        <div className="my_note">
          <textarea
            cols="10"
            rows="5"
            value={inputText}
            onChange={TextHandeler}
            placeholder="Type....."
            maxLength={200}
          ></textarea>
          <div className="note_footer">
            <span>Left: {charleft}</span>
            <button className="note_save" onClick={SaveHandler}>Save</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateNote;
