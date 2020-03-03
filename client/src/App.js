import React from "react";
import "./App.css";

import Navi from "../src/components/navi";
import TodoList from "../src/components/todoList";

function App() {
  return (
    <div className="App">
      <Navi />
      <TodoList />
    </div>
  );
}

export default App;
