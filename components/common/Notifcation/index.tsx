import { useContext, useEffect } from 'react'
import { IconCancel, IconInfo, IconCheck, IconWarning } from 'components/common/Icons'
import { NotificationContextB, NOTIFICATION_UPDATE } from 'context/NotificationsContextB'
const COLORS_AND_ICON = {
  success: ['bg-green-500', '#337435', IconCheck],
  info: ['bg-blue-500', '#075c83', IconInfo],
  warning: ['bg-yellow-500', '#8d6a03', IconWarning],
  error: ['bg-red-500', '#ad1310', IconCancel],
}
export const Notification = () => {
  const { notificationState, notificationDispatch } = useContext(NotificationContextB)
  const { isOpen, type, message } = notificationState
  const [bgColor, strokeColor, Icon] = type ? COLORS_AND_ICON[type] : []

  if (!isOpen) return null

  useEffect(() => {
    isOpen &&
      setTimeout(() => {
        notificationDispatch({
          type: NOTIFICATION_UPDATE,
          payload: {
            isOpen: false,
            type: '',
            message: '',
          },
        })
      }, 5000)
  }, [])

  return (
    <div
      className={`fixed left-4 bottom-4 max-w-xl shadow rounded text-white ${bgColor} flex items-center p-5 overflow-hidden z-50 animate-fade-in lg:max-w-md md:max-w-sm ml:max-w-none ml:right-4`}
      // animation-fade-in en tailwind.config.js indica cuanto tiempo durará la notificación (5s)
    >
      <div className='mr-5'>
        <Icon width={30} height={30} stroke={strokeColor} />
      </div>
      <span>{message}</span>
    </div>
  )
}
