import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setcounter] = useState(15);

  const addValue = () => {
    // setcounter(counter + 1)
    setcounter((prevCounter) => prevCounter + 1);
    setcounter((prevCounter) => prevCounter + 1);
    setcounter((prevCounter) => prevCounter + 1);
    setcounter((prevCounter) => prevCounter + 1);
  };

  const removeValue = () => {
    setcounter((prevCounter) => (prevCounter > 0) ? prevCounter - 1 : prevCounter);
  };


  return (
    <>
      <h1>Counter</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value: {counter}</button>

      <br />

      <button onClick={removeValue}>Remove value: {counter}</button>

      <p>footer: {counter}</p>
    </>
  );
}

export default App;
