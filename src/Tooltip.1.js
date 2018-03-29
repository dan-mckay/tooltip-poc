import React from 'react'
import {rootNode} from './index.js'

const Portal = (props) => {
  return ReactDOM.createPortal(
    this.props.children,
    props.$node
  );
}

class FloatContainer extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      height: 0,
      width: 0,
      xPos: 0,
      yPos: 0
    }
  }

  componentDidMount() {
    this.setSize()
    this.setPosition()
  }

  setRenderedWidth() {
    this.setState({
      height: this.elem.offsetHeight,
      width: this.elem.offsetWidth
    })
  }

  render() {
    // React does *not* create a new div. It renders the children into `domNode`.
    // `domNode` is any valid DOM node, regardless of its location in the DOM.
  }
}

// FloatContainer.propTypes = {
// }

// FloatContainer.defaultProps = {
// }

export default Float;