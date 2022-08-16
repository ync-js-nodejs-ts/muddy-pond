export type TUserToRegister = {
  username: string
  email: string
  password: string
}

export type TUserToLogin = {
  identifier: string
  password: string
}

export type TUser = {
  id: string
  username: string
  email: string
  isActive: boolean
  role: {
    name: string
    description: string
    type: string
    id: string
  }
}

export type TUserStrapiRes = {
  _id: string
  id: string
  confirmed: boolean
  blocked: boolean
  username: string
  email: string
  provider: string
  createdAt: string
  updatedAt: string
  __v: number
  role: {
    _id: string
    name: string
    description: string
    type: string
    __v: number
    id: string
  }
}

export type TAuthStrapiRes = {
  jwt: string
  user: TUserStrapiRes
}
