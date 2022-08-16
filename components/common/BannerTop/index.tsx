import { ReactNode } from 'react'

interface IBannerTopProps {
  children?: ReactNode
  color?: string
  message?: string
  type?: 'primary' | 'secondary'
}

export const BannerTop = ({ children, message, color, type }: IBannerTopProps) => {
  if (type === 'primary')
    return (
      <section className='sm:mt-0 w-72 rounded-3xl m-auto mt-2 py-1 px-4 bg-yellow-400'>
        <p className='text-white flex justify-center items-center text-xs text-center'>
          {children}
          {message}
        </p>
      </section>
    )

  return (
    <section
      className={`sm:mt-0 max-w-xl sm:rounded-t-none m-auto mt-2 py-1 px-4 rounded text-center ${
        color === 'secondary' ? 'bg-yellow-400' : 'bg-black'
      }`}
    >
      <p className='text-white flex justify-center items-center ml:text-xs'>
        {children}
        {message}
      </p>
    </section>
  )
}
