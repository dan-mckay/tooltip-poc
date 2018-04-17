export const TOP = 'top'
export const TOP_LEFT = 'top-left'
export const TOP_RIGHT = 'top-right'

export const BOTTOM = 'bottom'
export const BOTTOM_LEFT = 'bottom-left'
export const BOTTOM_RIGHT = 'bottom-right'

export const LEFT = 'left'
export const LEFT_TOP = 'left-top'
export const LEFT_BOTTOM = 'left-bottom'

export const RIGHT = 'right'
export const RIGHT_TOP = 'right-top'
export const RIGHT_BOTTOM = 'right-bottom'

const POSITIONS = [
  TOP,
  TOP_LEFT,
  TOP_RIGHT,
  BOTTOM,
  BOTTOM_LEFT,
  BOTTOM_RIGHT,
  LEFT,
  LEFT_TOP,
  LEFT_BOTTOM,
  RIGHT,
  RIGHT_TOP,
  RIGHT_BOTTOM
]

export const arrowClasses = {
  [TOP]: 'arrow-down',
  [TOP_LEFT]: 'arrow-down-left',
  [TOP_RIGHT]: 'arrow-down-right',
  [BOTTOM]: 'arrow-up',
  [BOTTOM_LEFT]: 'arrow-up-left',
  [BOTTOM_RIGHT]: 'arrow-up-right',
  [LEFT]: 'arrow-right',
  [LEFT_TOP]: 'arrow-right-top',
  [LEFT_BOTTOM]: 'arrow-right-bottom',
  [RIGHT]: 'arrow-left',
  [RIGHT_TOP]: 'arrow-left-top',
  [RIGHT_BOTTOM]: 'arrow-left-bottom'
}

export default POSITIONS