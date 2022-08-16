import { config } from 'config'
import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

const options = {
  providers: [
    Providers.Google({
      clientId: config.PROVIDERS.GOOGLE.clientId,
      clientSecret: config.PROVIDERS.GOOGLE.clientSecret,
    }),
  ],
  session: { jwt: true },
  callbacks: {
    session: async (session, user) => {
      session.jwt = user.jwt
      session.id = user.id
      return Promise.resolve(session)
    },
    jwt: async (token, user, account) => {
      const isSignIn = user ? true : false

      if (isSignIn) {
        const response = await fetch(`https://lcpcaracas-cms.herokuapp.com/auth/${account.provider}/callback?access_token=${account?.accessToken}`)
        const data = await response.json()
        token.jwt = data.jwt
        token.id = data.user.id
      }

      return Promise.resolve(token)
    },
  },
}

const Auth = (req, res) => NextAuth(req, res, options)

export default Auth
