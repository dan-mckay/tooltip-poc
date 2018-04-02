import React from 'react'
import { PropTypes } from 'prop-types'
import Position from './Position.js'
import { TOP, BOTTOM, RIGHT, LEFT, POSITIONS } from './constants.js'
import './Tooltip.css'

// Presentation component
const Tooltip = props => {
  const coords = props.coords
  return (
    <div className='tooltip' style={{ position: 'absolute', left: coords.x, top: coords.y }}>
      {props.text}
    </div>
  )
}

// Export presentation component wrapped with position component
const PositionTooltip = props => {
  return (
    <Position position={props.position} $target={props.$target} render={coords => (
      <Tooltip text={props.text} coords={coords} />
    )}/>
  )
}

export default PositionTooltip

PositionTooltip.propTypes = {
  $target: PropTypes.node.isRequired,
  render: PropTypes.func.isRequired,
  position: PropTypes.oneOf(POSITIONS),
  // TODO - don't limit to string could be component etc.
  text: PropTypes.string
}

PositionTooltip.defaultProps = {
  position: BOTTOM,
  text: 'this is a tooltip'
}
