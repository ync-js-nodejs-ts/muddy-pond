import { AuthProvider } from 'context/AuthContext'
import { TicketProvider } from 'context/ModalContext'
import { NotificationProviderB } from 'context/NotificationsContextB'

const composeProviders = (...providers) => ({ children }) => {
  return providers.reduceRight((child, Provider) => <Provider>{child}</Provider>, children)
}

export const Providers = composeProviders(AuthProvider, TicketProvider, NotificationProviderB)
