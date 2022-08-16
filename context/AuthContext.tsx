import { createContext, Dispatch, SetStateAction } from 'react'
import useAuth from 'hooks/useAuth'
import { TUser, TUserToLogin, TUserToRegister } from 'types/user'

type TAuthContext = {
  auth: TUser | null
  authRegister: (userRegister: TUserToRegister) => Promise<void>
  authLogin: (userLogin: TUserToLogin) => Promise<void>
  logout: () => void
  isLoading: boolean
  setIsLoading: Dispatch<SetStateAction<boolean>>
} | null

export const AuthContext = createContext<TAuthContext>(null)

export const AuthProvider = ({ children }) => {
  const auth = useAuth()

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}
