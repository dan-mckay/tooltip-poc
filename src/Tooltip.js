import React from 'react';
import ReactDOM from 'react-dom';

const modalRoot = document.getElementById('modalRoot');

class Portal extends React.Component {
  constructor(props) {
    super(props);
    this.$el = document.createElement('div');

    this.state = {
      height: 0
    }
  }

  componentDidMount() {
    modalRoot.appendChild(this.$el);
    console.log(this.$el.offsetHeight)
  }

  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.$el
    )
  }
}

class Tooltip extends React.Component {
  render() {
    const coords = this.props.coords
    return (
      <div style={{ position: 'absolute', left: coords.x, top: coords.y }}>
        I am going to be a tooltip
      </div>
    );
  }
}

class Position extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      coords: {
        x: 0, 
        y: 0 
      }
    }
  }

  componentDidMount() {
    this.setPosition()
  }

  setPosition() {
    const {bottom, height, left, right, top, width, x, y} = this.props.$target.getBoundingClientRect()

    this.setState({
      coords: {
        x: x + width,
        y: y + height
      }
    })
  }

  render() {
    return (
      <Portal $node={this.props.$node}>
        {this.props.render(this.state.coords)}
      </Portal>
    );
  }
}

const PositionTooltip = props => {
  return (
    <Position $target={props.$node} render={coords => (
      <Tooltip coords={coords} />
    )}/>
  )
}

export default PositionTooltip