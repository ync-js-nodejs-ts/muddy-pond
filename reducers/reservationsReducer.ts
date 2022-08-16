import { IReservations } from 'types'

export const initialReservationReducer: IReservations = {
  isActive: true,
  firstWorship: 0,
  secondWorship: 0,
  thirdWorship: 0,
  maxReservations: 60,
  loading: true,
}

export type TActionReservationsReducer =
  | { type: 'setFirstWorship'; payload: number }
  | { type: 'setSecondWorship'; payload: number }
  | { type: 'setThirdWorship'; payload: number }
  | { type: 'setLoading'; payload: boolean }
  | { type: 'setIsActive'; payload: boolean }

export const reservationsReducer = (state: typeof initialReservationReducer, action: TActionReservationsReducer) => {
  switch (action.type) {
    case 'setFirstWorship':
      return {
        ...state,
        firstWorship: action.payload,
        loading: false,
      }

    case 'setSecondWorship':
      return {
        ...state,
        secondWorship: action.payload,
        loading: false,
      }

    case 'setThirdWorship':
      return {
        ...state,
        thirdWorship: action.payload,
        loading: false,
      }

    case 'setLoading':
      return {
        ...state,
        loading: action.payload,
      }

    case 'setIsActive':
      return {
        ...state,
        isActive: action.payload,
      }

    default:
      return state
  }
}
