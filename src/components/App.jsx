import React from "react";
import { useState } from "react";

function App() {
  const [words, setWords] = useState("");
  const [list, setList] = useState([]);

  function handleChange(event) {
    return setWords(event.target.value);
  }
  function addToList() {
    setList([...list, words]);
    setWords("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} value={words} />
        <button onClick={addToList}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {list.map((newlist) => {
            return <li>{newlist}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
