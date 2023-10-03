import React, { useEffect, useState } from "react";
import ToDoList from "./ToDoList";
import axios from "axios";
import Popup from "./Popup";


const AddToDo = () => {
  const [toDos, setToDos] = useState([]);
  const [input, setInput] = useState("");
  const [updateUI, setUpdateUI] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/get`)
      .then((res) => {
      console.log(res)
      setToDos(res.data)})
      .catch((err) => console.log(err));
  }, [updateUI]);

  const saveToDo = () => {
    axios
      .post(`http://localhost:3001/api/save`, { toDo: input })
      .then((res) => {
        console.log(res.data);
        setUpdateUI((prevState) => !prevState);
        setInput("");
      })
      .catch((err) => console.log(err));
  };

  return (
    <main>
      <div className="container">
        <h1 className="title">ToDo App</h1>

        <div className="input_holder">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Add a ToDo..."
          />
          <button disabled={!input} onClick={saveToDo}>Add</button>
        </div>

        <div className="list">
          {toDos.map((el) => (
            <ToDoList
              key={el._id}
              text={el.toDo}
              id={el._id}
              setUpdateUI={setUpdateUI}
              setShowPopup={setShowPopup}
              setPopupContent={setPopupContent}
            />
          ))}
        </div>
      </div>
      {showPopup && (
        <Popup
          setShowPopup={setShowPopup}
          popupContent={popupContent}
          setUpdateUI={setUpdateUI}
        />
      )}
    </main>
  );
};

export default AddToDo;
