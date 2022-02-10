import React from "react";

class DrumPad extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        currentDrum: "Placeholder",
      }
      this.handleKeyPress = this.handleKeyPress.bind(this);
      this.playAudio = this.playAudio.bind(this);
      this.handleClick = this.handleClick.bind(this);
      this.updateDisplay = this.updateDisplay.bind(this);
    }
    componentDidMount(){
      document.addEventListener('keydown', this.handleKeyPress)
    }
    componentWillUnmount(){
      document.removeEventListener('keydown', this.handleKeyPress)
    }
    handleKeyPress(e) {
      switch(e.keyCode) {
        case 81:
          this.playAudio("Q");
          break;
        case 87:
          this.playAudio("W");
          break;
        case 69:
          this.playAudio("E");
          break;
        case 65:
          this.playAudio("A");
          break;
        case 83:
          this.playAudio("S");
          break;
        case 68:
          this.playAudio("D");
          break;
        case 90:
          this.playAudio("Z");
          break;
        case 88:
          this.playAudio("X");
          break;
        case 67:
          this.playAudio("C");
          break;
        default:
          break;
      }
    }
    
    playAudio(key) {
      // play sound on button press
      const audio = document.getElementById(key);
      const display = audio.parentElement.id;
      audio.currentTime = 0;
      audio.play();
      this.updateDisplay(display);
    }
    updateDisplay(display) {
      this.setState({
        currentDrum: display,
      })
    }
    handleClick(e) {
      // plays sound on click
      const elem = e.target
      const display = elem.id;
      elem.firstElementChild.currentTime = 0;
      elem.firstElementChild.play();
      this.updateDisplay(display);
    }
    
    render() {
      return (
      <div id="display">
          {this.props.drumKit.map((obj) => <button className="drum-pad" id={obj.keyId} onClick={this.handleClick}>{obj.keyboard}<audio className="clip" id={obj.keyboard} src={obj.sound}></audio></button>)}
          <div className="display">
            <p className="drum-sound">{this.state.currentDrum}</p>
            <label for="volume"> Volume:</label>
            <input type="range" id="volume" name="volume" min="0" max="1" step="0.1"/>
          </div>
      </div>
      )
    }
  }

export default DrumPad;