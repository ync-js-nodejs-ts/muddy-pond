import { createContext, useReducer } from 'react'
import { initialTicketReducer, TicketReducer } from 'reducers/ticketReducer'
import { TTicketContext } from 'types'

const initialTicketContext = {
  ticket: initialTicketReducer,
  ticketDispatch: () => {},
}

export const TicketContext = createContext<TTicketContext>(initialTicketContext)

export const TicketProvider = ({ children }) => {
  const [ticket, ticketDispatch] = useReducer(TicketReducer, initialTicketReducer)

  return <TicketContext.Provider value={{ ticket, ticketDispatch }}>{children}</TicketContext.Provider>
}
