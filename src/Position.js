import React from 'react';
import Portal from './Portal.js'

export default class Position extends React.Component {
  state = { 
    coords: {
      x: 0, 
      y: 0 
    }
  }

  componentDidMount() {
    this.$tooltip = this.$element.$el.firstChild
    this.setPosition()
  }

  setPosition() {
    const {bottom, height, left, right, top, width, x, y} = this.props.$target.getBoundingClientRect()
    const tipHeight = this.$tooltip.offsetHeight
    const tipWidth = this.$tooltip.offsetWidth

    console.log(tipHeight, tipWidth)

    this.setState({
      coords: {
        x: x + width,
        y: y + height
      }
    })
  }

  render() {
    return (
      <Portal ref={elem => this.$element = elem} $node={this.props.$node}>
        {this.props.render(this.state.coords)}
      </Portal>
    );
  }
}