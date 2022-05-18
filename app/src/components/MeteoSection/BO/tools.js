import {
  // Wind direction
  WiDirectionUp, WiDirectionUpRight,
  WiDirectionRight, WiDirectionDownRight,
  WiDirectionDown, WiDirectionDownLeft,
  WiDirectionLeft, WiDirectionUpLeft
} from 'react-icons/wi'

export const showWindDirection = (direction) => {
  const size = '2em'
  if (direction > 337.5) return <WiDirectionUp size={size} />
  if (direction > 292.5) return <WiDirectionUpLeft size={size} />
  if (direction > 247.5) return <WiDirectionLeft size={size} />
  if (direction > 202.5) return <WiDirectionDownLeft size={size} />
  if (direction > 157.5) return <WiDirectionDown size={size} />
  if (direction > 122.5) return <WiDirectionDownRight size={size} />
  if (direction > 67.5) return <WiDirectionRight size={size} />
  if (direction > 22.5) return <WiDirectionUpRight size={size} />

  return <WiDirectionUpRight size={size} />
}
