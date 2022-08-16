import { useContext } from 'react'
import { NotificationContextB } from 'context/NotificationsContextB'
import { NavBar } from 'components/layout/NavBar'
import { Notification } from 'components/common/Notifcation'

const SiteLayout = ({ children }) => {
  const { notificationState } = useContext(NotificationContextB)
  const { isOpen } = notificationState
  return (
    <div className='w-full h-full relative'>
      {isOpen && <Notification />}
      <NavBar />
      {children}
    </div>
  )
}
export const getLayout = (page) => <SiteLayout>{page}</SiteLayout>
export default SiteLayout
