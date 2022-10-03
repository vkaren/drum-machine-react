import React from "react";
import Row from "./Row";

function Drums(props) {
  return (
    <div className="drums">
      <Row
        buttonsDetails={[
          { id: "clap-bongo", drum: "Q" },
          { id: "crash-bongo", drum: "W" },
          { id: "hit-hat-bongo", drum: "E" },
        ]}
        onButtonClick={props.onButtonClick}
        currentAudio={props.currentAudio}
        volume={props.volume}
        activeDrum={props.activeDrum}
        isDisable={props.isDisable}
      />
      <Row
        buttonsDetails={[
          { id: "ride-clap", drum: "A" },
          { id: "high-tom-mark-tree", drum: "S" },
          { id: "mid-tom-crash", drum: "D" },
        ]}
        onButtonClick={props.onButtonClick}
        currentAudio={props.currentAudio}
        volume={props.volume}
        activeDrum={props.activeDrum}
        isDisable={props.isDisable}
      />
      <Row
        buttonsDetails={[
          { id: "low-high-tom", drum: "Z" },
          { id: "snare-mid-tom", drum: "X" },
          { id: "kick-low-tom", drum: "C" },
        ]}
        onButtonClick={props.onButtonClick}
        currentAudio={props.currentAudio}
        volume={props.volume}
        activeDrum={props.activeDrum}
        isDisable={props.isDisable}
      />
    </div>
  );
}

export default Drums;
