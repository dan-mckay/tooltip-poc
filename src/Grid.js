import React, { Component } from 'react'
import classNames from 'classnames'
import Tooltip from './Tooltip.js'
import { TOP_LEFT, TOP, TOP_RIGHT, BOTTOM_LEFT, BOTTOM, BOTTOM_RIGHT, LEFT_TOP, LEFT, LEFT_BOTTOM, RIGHT_TOP, RIGHT, RIGHT_BOTTOM } from './constants.js'
import { rootNode } from './index.js'
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
            <label htmlFor={TOP_LEFT}>{TOP_LEFT}</label>
            <input type="radio" onChange={this.selectPosition} id={TOP_LEFT} value={TOP_LEFT} checked={position === TOP_LEFT} />
            <label htmlFor={TOP}>{TOP}</label>
            <input type="radio" onChange={this.selectPosition} id={TOP} value={TOP} checked={position === TOP} />
            <label htmlFor={TOP_RIGHT}>{TOP_RIGHT}</label>
            <input type="radio" onChange={this.selectPosition} id={TOP_RIGHT} value={TOP_RIGHT} checked={position === TOP_RIGHT} />
            <br />
            <label htmlFor={BOTTOM_LEFT}>{BOTTOM_LEFT}</label>
            <input type="radio" onChange={this.selectPosition} id={BOTTOM_LEFT} value={BOTTOM_LEFT} checked={position === BOTTOM_LEFT} />
            <label htmlFor={BOTTOM}>{BOTTOM}</label>
            <input type="radio" onChange={this.selectPosition} id={BOTTOM} value={BOTTOM} checked={position === BOTTOM} />
            <label htmlFor={BOTTOM_RIGHT}>{BOTTOM_RIGHT}</label>
            <input type="radio" onChange={this.selectPosition} id={BOTTOM_RIGHT} value={BOTTOM_RIGHT} checked={position === BOTTOM_RIGHT} />
            <br />
            <label htmlFor={LEFT_TOP}>{LEFT_TOP}</label>
            <input type="radio" onChange={this.selectPosition} id={LEFT_TOP} value={LEFT_TOP} checked={position === LEFT_TOP} />
            <label htmlFor={LEFT}>{LEFT}</label>
            <input type="radio" onChange={this.selectPosition} id={LEFT} value={LEFT} checked={position === LEFT} />
            <label htmlFor={LEFT_BOTTOM}>{LEFT_BOTTOM}</label>
            <input type="radio" onChange={this.selectPosition} id={LEFT_BOTTOM} value={LEFT_BOTTOM} checked={position === LEFT_BOTTOM} />
            <br />
            <label htmlFor={RIGHT_TOP}>{RIGHT_TOP}</label>
            <input type="radio" onChange={this.selectPosition} id={RIGHT_TOP} value={RIGHT_TOP} checked={position === RIGHT_TOP} />
            <label htmlFor={RIGHT}>{RIGHT}</label>
            <input type="radio" onChange={this.selectPosition} id={RIGHT} value={RIGHT} checked={position === RIGHT} />
            <label htmlFor={RIGHT_BOTTOM}>{RIGHT_BOTTOM}</label>
            <input type="radio" onChange={this.selectPosition} id={RIGHT_BOTTOM} value={RIGHT_BOTTOM} checked={position === RIGHT_BOTTOM} />
          </div>
        </div>
      </div>
    )
  }
}

export default Grid


