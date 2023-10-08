import axios from "axios";
import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";

const Popup = ({ setShowPopup, popupContent, setUpdateUI }) => {
  console.log(popupContent,"popupContent");
  const [input, setInput] = useState(popupContent.text);
  const apiurl="https://todo-server-fawn.vercel.app"
  const updateToDo = () => {
    axios
      .put(`${apiurl}/api/update/${popupContent.id}`, {
        toDo: input,
      })
      .then((res) => {
        console.log(res.data);
        setUpdateUI((prevState) => !prevState);
        setShowPopup(false);
      }).catch((error) => {
        // Handle any errors that occur during the request
        console.error("Error updating to-do:", error);
      });;
  };

  return (
    <div className="backdrop">
      <div className="popup">
        <RxCross1 className="cross" onClick={() => setShowPopup(false)} />
        <h1>Update ToDo</h1>

        <div className="popup__input_holder">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Update ToDo..."
          />
          <button onClick={updateToDo}>Update</button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
