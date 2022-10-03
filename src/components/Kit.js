import React from "react";

function Kit(props) {
  return (
    <div>
      <div className="kit">
        <input type="checkbox" id="kit" onInput={props.onInputChecked} />
        <div className="kit-switch"></div>
      </div>
      <p>Bank</p>
    </div>
  );
}

export default Kit;
