import React from 'react'
import Portal from './Portal.js'
import { debounce } from './utils.js'
import { 
  TOP_LEFT,
  TOP,
  TOP_RIGHT,
  BOTTOM_LEFT,
  BOTTOM,
  BOTTOM_RIGHT,
  LEFT_TOP,
  LEFT,
  LEFT_BOTTOM,
  RIGHT_TOP,
  RIGHT,
  RIGHT_BOTTOM 
} from './constants.js'

const DEFAULT_MARGIN = 20

export default class Position extends React.Component {
  state = { 
    coords: {
      x: 0, 
      y: 0 
    }
  }

  componentDidMount() {
    window.addEventListener('resize', debounce(this.setPosition), 250)
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

  componentWillUnmount() {
    window.removeEventListener('resize', debounce(this.setPosition))
  }

  setPosition = () => {
    switch (this.props.position) {
      case TOP:
        return this.setTop()
      case RIGHT:
        return this.setRight()
      case LEFT:
        return this.setLeft()
      case TOP_LEFT:
        return this.setTopLeft()
      case TOP_RIGHT:
        return this.setTopRight()
      case BOTTOM_LEFT:
        return this.setBottomLeft()
      case BOTTOM_RIGHT:
        return this.setBottomRight()
      case LEFT_TOP:
        return this.setLeftTop()
      case LEFT_BOTTOM:
        return this.setLeftBottom()
      case RIGHT_TOP:
        return this.setRightTop()
      case RIGHT_BOTTOM:
        return this.setRightBottom()
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

  setTopLeft() {
    const {top, width, left} = this.props.$target.getBoundingClientRect()
    const xPos = left
    const yPos = top - this.tipHeight - DEFAULT_MARGIN

    this.setCoords(xPos, yPos)
  }

  setTopRight() {
    const {top, width, right} = this.props.$target.getBoundingClientRect()
    const xPos = right - this.tipWidth
    const yPos = top - this.tipHeight - DEFAULT_MARGIN

    this.setCoords(xPos, yPos)
  }

  setBottomLeft() {
    const {bottom, width, left} = this.props.$target.getBoundingClientRect()
    const xPos = left
    const yPos = bottom + DEFAULT_MARGIN

    this.setCoords(xPos, yPos)
  }

  setBottomRight() {
    const {bottom, width, right} = this.props.$target.getBoundingClientRect()
    const xPos = right - this.tipWidth
    const yPos = bottom + DEFAULT_MARGIN

    this.setCoords(xPos, yPos)
  }

  setLeftTop() {
    const {top, height, left} = this.props.$target.getBoundingClientRect()
    const xPos = left - this.tipWidth - DEFAULT_MARGIN
    const yPos = top

    this.setCoords(xPos, yPos)
  }

  setLeftBottom() {
    const {bottom, height, left} = this.props.$target.getBoundingClientRect()
    const xPos = left - this.tipWidth - DEFAULT_MARGIN
    const yPos = bottom - this.tipHeight

    this.setCoords(xPos, yPos)
  }

  setRightTop() {
    const {top, height, right} = this.props.$target.getBoundingClientRect()
    const xPos = right + DEFAULT_MARGIN
    const yPos = top

    this.setCoords(xPos, yPos)
  }

  setRightBottom() {
    const {bottom, height, right} = this.props.$target.getBoundingClientRect()
    const xPos = right + DEFAULT_MARGIN
    const yPos = bottom - this.tipHeight

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