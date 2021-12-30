import React from "react";
import "./styles.css";

import ListInput from "./components/listAdder";
import ListOutput from "./components/listDisplay";

export default function App() {
  return (
    <div className="App">
      <h1>Todo list</h1>
      <p>Add items</p>
      <ListInput />
      <div>
        <ListOutput />
      </div>
    </div>
  );
}
