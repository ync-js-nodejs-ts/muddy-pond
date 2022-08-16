import { TIconProps } from './types'
export const IconCancel = ({
  classes = null,
  height = 24,
  width = 24,
  fill = 'none',
  stroke = 'none',
  handleClick,
  isActive = false,
}: TIconProps) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox='0 0 24 24' fill={fill} stroke={stroke} className={classes}>
    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z' />
  </svg>
)
