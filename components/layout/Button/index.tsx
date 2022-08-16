import { ReactNode } from 'react'

interface IButtonProps {
  children: ReactNode
  color?: string
  callback?: () => void
  type?: 'button' | 'submit' | 'reset'
  tabIndex?: number
  className?: string
}

export const Button = ({ children, color, callback, type, tabIndex, className }: IButtonProps) => {
  return (
    <button
      tabIndex={tabIndex}
      type={type}
      onClick={callback}
      className={`border-2 rounded hover:bg-yellow-500 hover:text-white hover:transition duration-200 ease-in-out mt-2 min-w-min ${className || ''}`}
    >
      {children}
    </button>
  )
}
