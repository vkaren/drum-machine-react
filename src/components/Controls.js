import React from "react";
import Display from "./Display";
import Kit from "./Kit";
import Power from "./Power";
import Volume from "./Volume";

function Controls(props) {
  return (
    <div className="controls">
      <Power onInputChecked={props.onInputChecked} />

      <div>
        <Display display={props.display} isDisable={props.isDisable} />
        <Volume onVolumeUpdate={props.onVolumeUpdate} />
      </div>

      <Kit onInputChecked={props.onInputChecked} />
    </div>
  );
}

export default Controls;
