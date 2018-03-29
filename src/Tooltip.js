import React from 'react';
import ReactDOM from 'react-dom';

const Portal = props => {
  return ReactDOM.createPortal(
    props.children,
    window.document.body
  );
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
        x: 0, y: 0 
      }
    }
  }

  componentDidMount() {
    this.setPosition()
  }

  componentWillReceiveProps(next) {
    console.log(this.props)
    if (!this.props.children && next.children) {
      console.log('>>>', this.props.children)
    }
  }

  setPosition() {
    const random = getRandomIntInclusive(2, 10)
    this.setState({
      coords: {
        x: Math.floor(window.innerWidth / random),
        y: Math.floor(window.innerHeight / random)
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

export default class PositionTooltip extends React.Component {
  render() {
    return (
      <Position $node={this.props.$node} render={coords => (
        <Tooltip coords={coords} />
      )}/>
    )
  }
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}