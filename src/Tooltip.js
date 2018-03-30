import React from 'react';
import Position from './Position.js'
import './Tooltip.css'

// Presentation component
const Tooltip = props => {
  const coords = props.coords
  return (
    <div className='tooltip' style={{ position: 'absolute', left: coords.x, top: coords.y }}>
      I am going to be a tooltip
    </div>
  );
}


const PositionTooltip = props => {
  return (
    <Position $target={props.$node} render={coords => (
      <Tooltip coords={coords} />
    )}/>
  )
}

export default PositionTooltip