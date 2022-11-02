import React, { useState } from "react";

function LightSwitch({state}) {
  const appClass = false ? "App dark" : "App light";
  const [trueState, setState] = useState(appClass);
  console.log(useState);
  setState(false);
}

export default LightSwitch;
