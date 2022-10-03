import React from "react";
import Button from "./Button";

function Row(props) {
  return (
    <div className="row">
      {props.buttonsDetails.map((button) => {
        const { id, drum } = button;

        return (
          <Button
            key={drum}
            drum={drum}
            id={id}
            onButtonClick={props.onButtonClick}
            currentAudio={props.currentAudio}
            volume={props.volume}
            activeDrum={props.activeDrum}
            isDisable={props.isDisable}
          />
        );
      })}
    </div>
  );
}

export default Row;
