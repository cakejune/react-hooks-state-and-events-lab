import React from "react";
import { useState } from "react";

function Item({ name, category }) {
  const [initialState, changeState] = useState(false);
  console.log(initialState);
  function moveItem() {
    changeState(!initialState);
  }

  return (
    <li className={initialState ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={moveItem} className={"add"}>
        {initialState ? "Remove from Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;

// Class name = ""
// --> classname --> "in-cart"

//if classname = 'in-cart' then text will be "Remove from Cart"
//if classname = "" then we want text to be "Add to Cart"
