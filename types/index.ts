import { ReactNode, Dispatch } from 'react'

export type FalsyType = null | undefined | '' | 0

export interface IReservations {
  isActive: boolean
  firstWorship: number
  secondWorship: number
  thirdWorship: number
  maxReservations: number
  loading: boolean
}

export interface IFormReservationProps {
  reservations: IReservations
}

type EnumScheduleWorship = 'primer servicio' | 'segundo servicio'

export type IReservation = {
  name: string
  lastname: string
  phone: string
  email?: string
  totalReservations: string | number
  scheduleWorship: EnumScheduleWorship | string
  reservationDate?: string
}

export interface TChipProps {
  children: ReactNode
}

export type TConfig = {
  CMS: {
    BASE_URL: string
    API: {
      ARTICULOS: '/articulos'
      CATEGORIAS: '/categorias'
    }
  }

  PROVIDERS: {
    GOOGLE: {
      clientId: string
      clientSecret: string
      GOOGLE_TEST_OAUTH_ID_CLIENT: string
      GOOGLE_TEST_OAUTH_SECRET_CLIENT: string
    }
    YOUTUBE_TESTS: {
      YOUTUBE_API_KEY: string
    }
  }

  FIREBASE: {
    apiKey: string
    authDomain: string
    databaseURL: string
    projectId: string
    storageBucket: string
    messagingSenderId: string
    appId: string
    measurementId: string
  }

  FIREBASE_ADMIN: {
    credentials: {
      projectId: string
      clientEmail: string
      privateKey: string
    }
  }

  YOUTUBE: {
    YOUTUBE_KEY: string
    USER_ID: string
    CHANNEL_ID: string
    PART: {
      ID: 'id'
      CONTENT_DETAILS: 'contentDetails'
      SNIPPET: 'snippet'
      STATUS: 'status'
    }
    PLAYLIST: {
      PREDICAS: string
      ESTUDIOS_BIBLICOS: string
    }
  }
}

// Forms Types
// FormReservation Types

type TNameRules = {
  required: { value: boolean; message: string }
  maxLength: { value: number; message: string }
  minLength: { value: number; message: string }
  pattern: { value: RegExp; message: string }
}

type TLastNameRules = {
  required: { value: boolean; message: string }
  maxLength: { value: number; message: string }
  minLength: { value: number; message: string }
  pattern: { value: RegExp; message: string }
}

type TPhoneRules = {
  required: { value: boolean; message: string }
  maxLength: { value: number; message: string }
  minLength: { value: number; message: string }
  pattern: { value: RegExp; message: string }
}

type TEmailRules = {
  pattern: { value: RegExp; message: string }
}

type TTotalReservationsRules = {
  required: { value: boolean; message: string }
}

type TWorshipSheduleRules = {
  required: { value: boolean; message: string }
}

export interface IFormReservationRules {
  name: TNameRules
  lastname: TLastNameRules
  phone: TPhoneRules
  email: TEmailRules
  totalReservations: TTotalReservationsRules
  worshipShedule: TWorshipSheduleRules
}

export type TReservationOption = { label: string; value: number }
export type TReservationOptions = TReservationOption[]

export type TResPlaylistItem = {
  kind: string
  etag: string
  id: string
  snippet: {
    publishedAt: string
    channelId: string
    title: string
    description: string
    thumbnails: {
      default: {
        url: string
        width: number
        height: number
      }
      medium: {
        url: string
        width: number
        height: number
      }
      high: {
        url: string
        width: number
        height: number
      }
      standard: {
        url: string
        width: number
        height: number
      }
      maxres: {
        url: string
        width: number
        height: number
      }
    }
    channelTitle: string
    playlistId: string
    position: number
    resourceId: {
      kind: string
      videoId: string
    }
    videoOwnerChannelTitle: string
    videoOwnerChannelId: string
  }
}

export type TResYoutubePlaylist = {
  kind: string
  etag: string
  nextPageToken: string
  items: TResPlaylistItem[]
  pageInfo: {
    totalResults: number
    resultsPerPage: number
  }
}

export type TVideo = {
  id: string
  title: string
  description: string
  url: string
  thumbnails: {
    default: {
      url: string
      width: number
      height: number
    }
    medium: {
      url: string
      width: number
      height: number
    }
    high: {
      url: string
      width: number
      height: number
    }
    standard: {
      url: string
      width: number
      height: number
    }
    maxres: {
      url: string
      width: number
      height: number
    }
  }
  publishedAt: string
}

export type TPlaylist = TVideo[]

// Ticket Context - Ticket Reducer
export type TTicket = {
  email: string
  lastname: string
  name: string
  phone: string
  schedule: string
  chairs: number
  isOpen?: boolean
  isLoading?: boolean
}

export type TActionTicketReducer =
  | { type: 'ticketClose' }
  | { type: 'ticketOpen' }
  | { type: 'ticketLoading'; payload: boolean }
  | { type: 'ticketData'; payload: TTicket }

export type TTicketContext = {
  ticket: TTicket
  ticketDispatch: Dispatch<TActionTicketReducer>
}

export type TInitialModalContext = {
  modal: {
    type: 'ticketReservation' | null
    isActive: boolean
    loading: boolean
    reservationData: {
      email: string
      lastname: string
      name: string
      phone: string
      totalReservations: string
      type: 'ticketReservation' | null
    }
  }
  modalDispatch: () => void
}
