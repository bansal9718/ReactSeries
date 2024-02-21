import { useState } from "react";
import Card from "./Components/Card";
import "./App.css";

function App() {
 

  return (
    <>
      <h1 className="p-4 bg-green-400 text-black rounded-xl mb-4">
        Tailwind test
      </h1>

      <Card username="Natasha" btnText="Click me" />
      <Card username="Naina" btnText="Click" />
    </>
  );
}

export default App;
