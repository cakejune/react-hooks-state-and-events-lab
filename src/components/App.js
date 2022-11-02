import React from "react";
import { useState } from "react";
// import Item from "./items";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature

  const [trueState, setState] = useState(true);
  // const appClass = !trueState ? "App dark" : "App light";
  console.log(trueState);

  function turnSwitch() {
    setState(!trueState);
  }

  return (
    <div className={trueState ? "App red" : "App dark"}>
      <header>
        <h2>Shopster</h2>
        <button onClick={turnSwitch}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
