import Chai from "./chai";
import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(0);
  // const username = "chai aur code"; final outcome {username} evaluated expression

  const addValue = () => {
    // console.log("clicked", counter);
    setCounter(counter++);
  };

  const removeValue = () => {
    // console.log("clicked", counter);
    setCounter(counter--);
  };
  return (
    <>
      <h1>chai aur react</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
    </>
  );
}

export default App;
