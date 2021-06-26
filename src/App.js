import DrumMachine from './Components/DrumMachine/DrumMachine';
import './App.css';
import React from 'react';

class App extends React.Component {
  render(){  
    return (
      <div id = "drum-machine" className="App">
        <DrumMachine />
      </div>
    );
  }
}

export default App;
