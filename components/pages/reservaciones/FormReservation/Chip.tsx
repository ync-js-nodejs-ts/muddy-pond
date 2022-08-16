import { TChipProps } from 'types'

export const Chip = ({ children }: TChipProps) => {
  return <div className='border-2 border-red-500 px-2 py-1 text-xs rounded'>{children}</div>
}
