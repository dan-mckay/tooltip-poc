import React, { Component } from 'react'
import classNames from 'classnames'
import Tooltip from './Tooltip.js'
import {TOP, BOTTOM, LEFT, RIGHT} from './constants.js'
import {rootNode} from './index.js'
import './App.css'

class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isShowing: false,
      position: BOTTOM,
      $target: null 
    }
  }

  toggleTip = e => {
    const { isShowing, $node } = this.state
    if (isShowing) {
      this.setState({ isShowing: false, $target: null })
    } else {
      e.stopPropagation()
      this.setState({ isShowing: true, $target: e.target })
    }
  }

  selectPosition = e => {
    this.setState({
      position: e.target.value
    });
  }

  render() {
    const { isShowing, position, $target } = this.state
    const buttonText = isShowing ? 'Hide' : 'Show'

    return (
      <div className='container'>
        <div className='buttoncontainer'>
          <div className={classNames('button', { red: isShowing })} onClick={this.toggleTip}>{buttonText}</div>
          {this.state.isShowing ?
            <Tooltip position={position} $target={$target} /> : null
          }
        </div>
        <div className='controlpanel'>
          <div className='radiogroup'>
            <label htmlFor={TOP}>Top</label>
            <input type="radio" onChange={this.selectPosition} id={TOP} value={TOP} checked={position === TOP} />
            <label htmlFor={BOTTOM}>Bottom</label>
            <input type="radio" onChange={this.selectPosition} id={BOTTOM} value={BOTTOM} checked={position === BOTTOM} />
            <label htmlFor={LEFT}>Left</label>
            <input type="radio" onChange={this.selectPosition} id={LEFT} value={LEFT} checked={position === LEFT} />
            <label htmlFor={RIGHT}>Right</label>
            <input type="radio" onChange={this.selectPosition} id={RIGHT} value={RIGHT} checked={position === RIGHT} />
          </div>
        </div>
      </div>
    )
  }
}

export default Grid


