import React from "react";

class DrumPad extends React.Component {
    constructor(props) {
      super(props);
      this.handleKeyPress = this.handleKeyPress.bind(this);
      this.playAudio = this.playAudio.bind(this);
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
      console.log(audio);
      audio.currentTime = 0;
      audio.play();
    }
    handleClick(e) {
      // plays sound on click
      e.target.firstElementChild.currentTime = 0;
      e.target.firstElementChild.play();
    }
    
    render() {
      return (
      <div id="display">
          {this.props.drumKit.map((obj) => <button className="drum-pad" id={obj.keyId} onClick={this.handleClick}>{obj.keyboard}<audio className="clip" id={obj.keyboard} src={obj.sound}></audio></button>)}
          <p className="display"></p>
      </div>
      )
    }
  }