import React from "react";

function Display(props) {
  return (
    <div id="display">
      <p>{props.isDisable ? "" : props.display}</p>
    </div>
  );
}

export default Display;
