import { TIconProps } from './types'

export const IconFacebook = ({ handleClick, height, width, isActive }: TIconProps) => (
  <svg className='brightness' width={width ? width : '24'} height={height ? height : '24'} viewBox='0 0 512 512'>
    <path
      style={{ fill: '#275db5' }}
      d='m512 256c0-141.4-114.6-256-256-256s-256 114.6-256 256 114.6 256 256 256c1.5 0 3 0 4.5-.1v-199.2h-55v-64.1h55v-47.2c0-54.7 33.4-84.5 82.2-84.5 23.4 0 43.5 1.7 49.3 2.5v57.2h-33.6c-26.5 0-31.7 12.6-31.7 31.1v40.8h63.5l-8.3 64.1h-55.2v189.5c107-30.7 185.3-129.2 185.3-246.1z'
    />
  </svg>
)
