import { useState, useEffect } from 'react'
import { parseCookies, setCookie } from 'nookies'
import { normalizeUser } from 'utils/auth'
import { TAuthStrapiRes, TUserToLogin, TUserToRegister } from 'types/user'

export default function useAuth() {
  const [auth, setAuth] = useState(null)
  const [authIsLoading, setAuthIsLoading] = useState(false)
  const cookies = parseCookies()

  const authRegister = async (userRegister: TUserToRegister) => {
    const res = await fetch(`https://lcpcaracas-cms.herokuapp.com/auth/local/register`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userRegister),
    })

    const registratedUser: TAuthStrapiRes = await res.json()

    setCookie(null, 'token', registratedUser.jwt, {
      maxAge: 60,
      path: '/',
    })

    const normalizedUser = normalizeUser(registratedUser.user)
    setAuth(() => normalizedUser)
  }

  const authLogin = async (userLogin: TUserToLogin) => {
    const res = await fetch(`https://lcpcaracas-cms.herokuapp.com/auth/local`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userLogin),
    })

    const loggedUser: TAuthStrapiRes = await res.json()

    setCookie(null, 'token', loggedUser.jwt, {
      maxAge: 60,
      path: '/',
    })

    const normalizedUser = normalizeUser(loggedUser.user)
    setAuth(() => normalizedUser)
  }

  const logout = () => setAuth(() => null)

  useEffect(() => {
    if (cookies.token && auth === null) {
      console.log('useAuth cookies.token && auth === null')

      window
        .fetch(`https://lcpcaracas-cms.herokuapp.com/users/me`, {
          headers: new Headers({
            Authorization: `Bearer ${cookies.token}`,
          }),
        })
        .then((res) => res.json())
        .then((user) => {
          const normalizedUser = normalizeUser(user)
          setAuth(() => normalizedUser)
        })
        .catch(console.error)
    }

    if (!cookies.token) {
      console.log('useAuth - No token in the cookies, setAuth to null')
      setAuth(() => null)
    }
  }, [cookies])

  return {
    auth,
    authRegister,
    authLogin,
    logout,
    isLoading: authIsLoading,
    setIsLoading: setAuthIsLoading,
  }
}
