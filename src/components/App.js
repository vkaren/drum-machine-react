import React from "react";
import Drums from "./Drums";
import Controls from "./Controls";
import { drums, heaterClips, soulClips } from "../drums";

class App extends React.Component {
  state = {
    currentAudio: { src: "", drum: "" },
    display: "",
    volume: 0.5,
    kit: false,
    power: false,
    activeDrum: false,
  };

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  activeDrum = () => {
    const activeDrum = !this.state.activeDrum;
    this.setState({ activeDrum });
  };

  playAudio = (event) => {
    const drum = event.key ? event.key.toUpperCase() : event.target.innerText;

    if (!drums.includes(drum)) return null;

    if (this.state.kit) {
      this.setState({
        currentAudio: { src: soulClips[drum].url, drum },
        display: soulClips[drum].name,
      });
    } else {
      this.setState({
        currentAudio: { src: heaterClips[drum].url, drum },
        display: heaterClips[drum].name,
      });
    }

    this.activeDrum();
    this.timer = setTimeout(() => this.activeDrum(), 400);
  };

  onInputChecked = (event) => {
    const id = event.target.id;

    if (event.target.checked) {
      this.setState({ [id]: true });

      if (id === "kit") {
        this.setState({ display: "Electro Soul Kit" });
      }
    } else {
      this.setState({ [id]: false });

      if (id === "kit") {
        this.setState({ display: "Heater Kit" });
      }
    }
  };

  onVolumeUpdate = (event) => {
    const volume = (event.target.value - "") / 100;

    this.setState({ volume, display: "Volume " + event.target.value });
  };

  render() {
    return (
      <div
        id="drum-machine"
        onKeyDown={this.playAudio}
        tabIndex="0"
        role="button"
      >
        <Drums
          onButtonClick={this.playAudio}
          currentAudio={this.state.currentAudio}
          volume={this.state.volume}
          activeDrum={this.state.activeDrum}
          isDisable={this.state.power}
        />
        <Controls
          display={this.state.display}
          onInputChecked={this.onInputChecked}
          onVolumeUpdate={this.onVolumeUpdate}
          isDisable={this.state.power}
        />
      </div>
    );
  }
}

export default App;
