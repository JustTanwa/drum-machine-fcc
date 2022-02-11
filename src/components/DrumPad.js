import React from "react";

class DrumPad extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        currentDrum: " ",
      }
      this.handleKeyPress = this.handleKeyPress.bind(this);
      this.playAudio = this.playAudio.bind(this);
      this.handleClick = this.handleClick.bind(this);
      this.handleChange = this.handleChange.bind(this);
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
      audio.parentElement.className= "click"; 
      setTimeout(()=>{
        audio.parentElement.className= "drum-pad"; 
      }, 100)
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
      elem.className= "click"; 
      setTimeout(()=>{
        elem.className= "drum-pad"; 
      }, 100)
      const display = elem.id;
      elem.firstElementChild.currentTime = 0;
      elem.firstElementChild.play();
      this.updateDisplay(display);
    }
    handleChange(e) {
      const volume = e.target.value;
      console.log(volume);
      const audio = document.getElementsByTagName('audio');
      console.log(typeof audio);
      for (let i = 0; i < 9; i++) {
        audio[i].volume = volume;
      }
    }
    
    render() {
      return (
      <div id="display">
          <div className="row">
            <div className="col-sm-3 offset-sm-3">
              <div className="button-container">
                {this.props.drumKit.map((obj, index) => 
                                          <button className="drum-pad" id={obj.keyId} onClick={this.handleClick}>
                                            {obj.keyboard}
                                            <audio className="clip" id={obj.keyboard} src={obj.sound}></audio>
                                          </button>
                                        )}
              </div>
            </div>
            <div className="col-sm-3">
              <div className="row display">
                <p className="drum-sound">{this.state.currentDrum}</p>
              </div>
              <div className="row volume">
                <label className="volControl" for="volume">Volume Control</label>
                <input type="range" id="volume" name="volume" min="0" max="1" defaultValue="0.5" step="0.1" onChange={this.handleChange}></input>
              </div>
              <div className="display">
                
                
              </div>
            </div>
          </div>
      </div>
      )
    }
  }

export default DrumPad;