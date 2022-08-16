import { createContext, useReducer } from 'react'

type TInitalState = {
  isOpen: boolean
  message: string
  type: string
}

export const NOTIFICATION_UPDATE = 'NOTIFICATION_UPDATE'

const ACTIONS_REDUCERS = {
  [NOTIFICATION_UPDATE]: (state, action) => {
    return {
      ...state,
      isOpen: action.payload.isOpen,
      type: action.payload.type,
      message: action.payload.message,
    }
  },
}
export const NotificationContextB = createContext(null)

const initalState: TInitalState = { isOpen: false, message: '', type: '' }

const reducer = (state, action) => {
  const actionReducer = ACTIONS_REDUCERS[action.type]
  return actionReducer ? actionReducer(state, action) : state
}

export const NotificationProviderB = ({ children }) => {
  const [notification, dispatch] = useReducer(reducer, initalState)

  return (
    <NotificationContextB.Provider
      value={{
        notificationState: notification,
        notificationDispatch: dispatch,
      }}
    >
      {children}
    </NotificationContextB.Provider>
  )
}
