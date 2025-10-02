import React from "react";

function CreateNote({TextHandeler,SaveHandler,inputText}) {
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
            maxLength={1000}
          ></textarea>
          <div className="note_footer">
            <span>Left</span>
            <button className="note_save" onClick={SaveHandler}>Save</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateNote;
