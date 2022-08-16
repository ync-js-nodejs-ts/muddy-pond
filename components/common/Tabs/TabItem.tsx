import { IconEmail } from 'components/common/Icons'
import { IconWhatsapp } from 'components/common/Icons/Whatsapp'

interface ITabItemProps {
  isActive: boolean
  title: string
  activateTab: (e: any, title: string) => void
}

const TabItem = ({ isActive, title, activateTab }: ITabItemProps) => {
  const MapTitleTab = (title: string) => {
    if (title === 'Correo') return <IconEmail width={18} height={18} />
    if (title === 'Whatsapp') return <IconWhatsapp width={18} height={18} />
  }

  if (isActive)
    return (
      <li className='mx-2 py-2 bg-yellow-400 w-28 rounded-2xl'>
        <a className='flex justify-center items-center text-white' onClick={(e) => activateTab(e, title)} href='#'>
          <p className='mr-2 text-xs font-medium'>{title}</p>
          {MapTitleTab(title)}
        </a>
      </li>
    )

  if (!isActive)
    return (
      <li className='mx-2 py-2 w-28 rounded-2xl'>
        <a className='flex justify-center items-center text-white' onClick={(e) => activateTab(e, title)} href='#'>
          <p className='mr-2 text-xs font-medium'>{title}</p>
          {MapTitleTab(title)}
        </a>
      </li>
    )
}

export { TabItem }
