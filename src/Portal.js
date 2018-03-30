import React from 'react'
import ReactDOM from 'react-dom'

const modalRoot = document.getElementById('modalRoot')

export default class Portal extends React.Component {
  constructor(props) {
    super(props)
    this.$el = document.createElement('div')
  }

  // Need to use this pattern because we can't measure a portal
  // or its contents until it has been added to the DOM
  // see https://reactjs.org/docs/portals.html#event-bubbling-through-portals
  componentDidMount() {
    modalRoot.appendChild(this.$el)
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.$el)
  }

  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.$el
    )
  }
}