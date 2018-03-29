import React, { Component } from 'react'
import Tooltip from './Tooltip.js'
import './App.css'

class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = { x: 0, y: 0, $node: null };
  }

  componentDidMount() {
    window.addEventListener('mousedown', this.hideTip, false);
  }

  hideTip = e => {
    console.log('hide', e.target)
    e.preventDefault
    this.setState({
      $node: null
    })
  }

  showTip = e => {
    console.log('show', e.target)
    e.stopPropagation()
    this.setState({
      $node: e.target
    })
  }

  render() {
    return (
      <div className="container" onClick={this.hideTip}>
        <div className="item top-left" onClick={this.showTip}>Top Left</div>
        <div className="item top-centre" onClick={this.showTip}>Top</div>
        <div className="item top-right" onClick={this.showTip}>Top Right</div>
        <div className="item left" onClick={this.showTip}>Left</div>
        <div className="item centre" onClick={this.showTip}>Centre</div>
        <div className="item right" onClick={this.showTip}>Right</div>
        <div className="item bottom-left" onClick={this.showTip}>Bottom Left</div>
        <div className="item bottom-centre" onClick={this.showTip}>Bottom</div>
        <div className="item bottom-right" onClick={this.showTip}>Bottom Right</div>
        {this.state.$node ?
          <Tooltip $node={this.state.$node} /> : null
        }
      </div>
    )
  }
}

export default Grid


