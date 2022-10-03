import React from "react";

function Power(props) {
  return (
    <div>
      <div className="power">
        <input type="checkbox" id="power" onInput={props.onInputChecked} />
        <div className="power-switch"></div>
      </div>
      <p>Power</p>
    </div>
  );
}

export default Power;
