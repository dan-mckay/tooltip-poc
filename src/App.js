import React, { Component } from 'react';
import Grid from './Grid.js';
import MouseTracker from './MouseTracker.js';
import Tooltip from './Tooltip.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid />
      </div>
    );
  }
}

export default App;
