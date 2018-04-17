import React from 'react'
import { PropTypes } from 'prop-types'
import Position from './Position.js'
import positions, { arrowClasses } from './constants.js'
import './Tooltip2.css'

// Presentation component
const Tooltip = props => {
  const coords = props.coords

  return (
    <div className={'tooltip'} style={{ width: props.width, left: coords.x, top: coords.y }}>
      <TooltipArrow position={props.position}>
        {props.text}
      </TooltipArrow>
    </div>
  )
}

const TooltipArrow = props => {
  return (
    <div>
      <div className={`tooltip-arrow-border ${arrowClasses[props.position]}`} />
        {props.children}
      <div className={`tooltip-arrow ${arrowClasses[props.position]}`} />
    </div>
  )
}

// Export presentation component wrapped with position component
const PositionTooltip = props => {
  return (
    <Position position={props.position} $target={props.$target} width={props.width} render={coords => (
      <Tooltip position={props.position} width={props.width} text={props.text} coords={coords} />
    )}/>
  )
}

export default PositionTooltip

PositionTooltip.propTypes = {
  $target: PropTypes.instanceOf(Element).isRequired,
  render: PropTypes.func.isRequired,
  position: PropTypes.oneOf(positions),
  // TODO - don't limit to string could be component etc.
  text: PropTypes.string
}

PositionTooltip.defaultProps = {
  position: positions.BOTTOM,
  text: 'this is a tooltip with quite a bit of text in it, what do you think about that, eh?',
  width: 100
}
