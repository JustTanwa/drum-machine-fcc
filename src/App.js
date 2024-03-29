import React from "react";
import DrumPad from './components/DrumPad.js'

const drumKit_1 = [
  {
    keyId: "Heater 1",
   keyboard: "Q",
  sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
  },
  {
    keyId: "Heater 2",
   keyboard: "W",
  sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
  },
  {
    keyId: "Heater 3",
   keyboard: "E",
  sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
  },
  {
    keyId: "Heater 4",
   keyboard: "A",
  sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
  },
  {
    keyId: "Clap",
   keyboard: "S",
  sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
  },
  {
    keyId: "Open HH",
   keyboard: "D",
  sound: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
  },
  {
    keyId: "Kick & Hat",
   keyboard: "Z",   
  sound: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
  },
  {
    keyId: "Kick",
   keyboard: "X",
  sound: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
  },
  {
    keyId: "Closed HH",
   keyboard: "C",
  sound: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
  },
]
const drumKit_2 = [
  {
    keyId: "Chord 1",
   keyboard: "Q",
  sound: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"
  },
  {
    keyId: "Chord 2",
   keyboard: "W",
  sound: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"
  },
  {
    keyId: "Chord 3",
   keyboard: "E",
  sound: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"
  },
  {
    keyId: "Shaker",
   keyboard: "A",
  sound: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"
  },
  {
    keyId: "Open HH",
   keyboard: "S",
  sound: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"
  },
  {
    keyId: "Closed HH",
   keyboard: "D",
  sound: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"
  },
  {
    keyId: "Punchy Kick",
   keyboard: "Z",
  sound: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"
  },
  {
    keyId: "Side Stick",
   keyboard: "X",
  sound: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"
  },
  {
    keyId: "Snare",
   keyboard: "C",
  sound: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"
  }
]
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentKit: drumKit_1
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      currentKit: this.state.currentKit === drumKit_1? drumKit_2: drumKit_1,
    })
  }
  render() {
    return (
    <div className="main" id="drum-machine">
        <h1 className="title"> Da-da-Drum Machi-chine </h1>
        <div className="container mb-2 text-center">
          <button className="switch" onClick={this.handleClick}>Switch Kit</button>
        </div>
        <DrumPad drumKit={this.state.currentKit}/>
    </div>
    );
  }
}

export default App;
