import React from 'react'
import Portal from './Portal.js'
import {ABOVE, BELOW, LEFT, RIGHT} from './constants.js'

export default class Position extends React.Component {
  state = { 
    coords: {
      x: 0, 
      y: 0 
    }
  }

  componentDidMount() {
    this.$tooltip = this.$element.$el.firstChild
    this.tipHeight = this.$tooltip.offsetHeight
    this.tipWidth = this.$tooltip.offsetWidth
    this.setPosition()
  }

  setPosition() {
    switch (this.props.position) {
      case ABOVE:
        return this.setAbove()
      case RIGHT:
        return this.setRight()
      case LEFT:
        return this.setLeft()
      case BELOW:
      default:
        return this.setBelow()
    }
  }

  setCoords(x, y) {
    this.setState({
      coords: {
        x,
        y
      }
    })
  }

  getMeasurements() {
    const {bottom, height, left, right, top, width, x, y} = this.props.$target.getBoundingClientRect()
  }

  setAbove() {
    // TODO implementation
  }

  setBelow() {
    const {bottom, width, left} = this.props.$target.getBoundingClientRect()
    const xPos = left + (width / 2 - this.tipWidth / 2)
    const yPos = bottom

    console.log(this.props.$target)
    console.log(this.props.$target.getBoundingClientRect())

    this.setCoords(xPos, yPos)
  }

  setLeft() {
    // TODO implementation
  }

  setRight() {
    // TODO implementation
  }

  render() {
    return (
      <Portal ref={elem => this.$element = elem} $node={this.props.$node}>
        {this.props.render(this.state.coords)}
      </Portal>
    );
  }
}