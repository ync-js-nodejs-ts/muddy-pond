import { TActionTicketReducer, TTicket } from 'types'

export interface IInitialTicketReducer extends TTicket {
  isOpen: false
  isLoading: false
}

export const initialTicketReducer: IInitialTicketReducer = {
  email: '',
  lastname: '',
  name: '',
  phone: '',
  schedule: '',
  chairs: 0,
  isOpen: false,
  isLoading: false,
}

export const TicketReducer = (state: IInitialTicketReducer, action: TActionTicketReducer) => {
  switch (action.type) {
    case 'ticketOpen':
      return { ...state, isOpen: true }

    case 'ticketClose':
      return { ...state, isOpen: false }

    case 'ticketLoading':
      return { ...state, isLoading: action.payload }

    case 'ticketData':
      console.log('Modal Reducer Data', action.payload)
      return {
        ...state,
        email: action.payload.email,
        lastname: action.payload.lastname,
        name: action.payload.name,
        phone: action.payload.phone,
        schedule: action.payload.schedule,
        chairs: action.payload.chairs,
      }

    default:
      return state
  }
}
