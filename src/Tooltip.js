import React from 'react'
import { PropTypes } from 'prop-types'
import Position from './Position.js'
import { TOP, BOTTOM, RIGHT, LEFT, POSITIONS } from './constants.js'
import './Tooltip2.css'

const arrowStyle = {
  [TOP]: 'arrowdown',
  [BOTTOM]: 'arrowup',
  [LEFT]: 'arrowright',
  [RIGHT]: 'arrowleft'
}

// Presentation component
const Tooltip = props => {
  const coords = props.coords
  return (
    <div className={'tooltip'} style={{ left: coords.x, top: coords.y }}>
      <TooltipArrow position={props.position}>
        {props.text}
      </TooltipArrow>
    </div>
  )
}

const TooltipArrow = props => {
  return (
    <div>
      <div className={`tooltip-arrow-border ${arrowStyle[props.position]}`} />
        {props.children}
      <div className={`tooltip-arrow ${arrowStyle[props.position]}`} />
    </div>
  )
}

// Export presentation component wrapped with position component
const PositionTooltip = props => {
  return (
    <Position position={props.position} $target={props.$target} render={coords => (
      <Tooltip position={props.position} text={props.text} coords={coords} />
    )}/>
  )
}

export default PositionTooltip

PositionTooltip.propTypes = {
  $target: PropTypes.instanceOf(Element).isRequired,
  render: PropTypes.func.isRequired,
  position: PropTypes.oneOf(POSITIONS),
  // TODO - don't limit to string could be component etc.
  text: PropTypes.string
}

PositionTooltip.defaultProps = {
  position: BOTTOM,
  text: 'this is a tooltip'
}
