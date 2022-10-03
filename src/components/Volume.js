import React from "react";

function Volume(props) {
  return (
    <div id="volume">
      <input
        type="range"
        min="0"
        max="100"
        id="slider"
        className="volume"
        onInput={props.onVolumeUpdate}
      />
    </div>
  );
}

export default Volume;
