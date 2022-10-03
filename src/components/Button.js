import React from "react";

class Button extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.currentAudio !== prevProps.currentAudio) {
      const drum = this.props.currentAudio.drum;
      const volume = this.props.volume;

      if (this.audio.current.id === drum) {
        this.audio.current.volume = volume;
        this.audio.current.play();
      }
    }
  }

  audio = React.createRef();

  render() {
    const { src, drum } = this.props.currentAudio;
    return (
      <button
        className={
          drum === this.props.drum && this.props.activeDrum
            ? "drum-pad active"
            : "drum-pad"
        }
        id={this.props.id}
        onClick={this.props.onButtonClick}
        disabled={this.props.isDisable}
      >
        <p>{this.props.drum}</p>
        {
          // eslint-disable-next-line jsx-a11y/media-has-caption
          <audio
            ref={this.audio}
            src={drum === this.props.drum ? src : ""}
            className="clip"
            id={this.props.drum}
          />
        }
      </button>
    );
  }
}

export default Button;
