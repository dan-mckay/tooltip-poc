import React from 'react'
import Portal from './Portal.js'
import {TOP, BOTTOM, LEFT, RIGHT} from './constants.js'

const DEFAULT_MARGIN = 20

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

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.position !== this.props.position) {
      this.setPosition()
    }
  }

  setPosition() {
    switch (this.props.position) {
      case TOP:
        return this.setTop()
      case RIGHT:
        return this.setRight()
      case LEFT:
        return this.setLeft()
      case BOTTOM:
      default:
        return this.setBottom()
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

  setTop() {
    const {top, width, left} = this.props.$target.getBoundingClientRect()
    const xPos = left + (width / 2 - this.tipWidth / 2)
    const yPos = top - this.tipHeight - DEFAULT_MARGIN

    this.setCoords(xPos, yPos)
  }

  setBottom() {
    const {bottom, width, left} = this.props.$target.getBoundingClientRect()
    const xPos = left + (width / 2 - this.tipWidth / 2)
    const yPos = bottom + DEFAULT_MARGIN

    this.setCoords(xPos, yPos)
  }

  setLeft() {
    const {bottom, height, left} = this.props.$target.getBoundingClientRect()
    const xPos = left - this.tipWidth - DEFAULT_MARGIN
    const yPos = bottom - (height / 2) - (this.tipHeight / 2)

    this.setCoords(xPos, yPos)
  }

  setRight() {
    const {bottom, height, right} = this.props.$target.getBoundingClientRect()
    const xPos = right + DEFAULT_MARGIN
    const yPos = bottom - (height / 2) - (this.tipHeight / 2)

    this.setCoords(xPos, yPos)
  }

  render() {
    return (
      <Portal ref={elem => this.$element = elem} $node={this.props.$node}>
        {this.props.render(this.state.coords)}
      </Portal>
    );
  }
}