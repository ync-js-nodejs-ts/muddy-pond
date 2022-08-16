import Head from 'next/head'
import { useEffect } from 'react'
import { db } from 'services/firebase'

export default function Live() {
  const getData = async () => {
    const data = db
      .collection('usersReservations')
      .where('inGoogleSheet', '==', false)
      .get()
      .then((snap) => snap.docs.map((doc) => doc.data()))

    return data
  }

  useEffect(() => {
    getData().then(console.log)
  }, [])

  return (
    <>
      <Head>
        <title>La Casa de mi Padre - Donde todos tienen un lugar</title>
      </Head>

      <main className='w-full min-h-screen pt-32'>Live Stream</main>
    </>
  )
}

// export const getStaticProps = async () => {
//   const google = {
//     client_id: '1036390509394-daln8o4rila297rngjf31gt5qtjd80pm.apps.googleusercontent.com',
//     project_id: 'youtube-tests-313921',
//     auth_uri: 'https://accounts.google.com/o/oauth2/auth',
//     token_uri: 'https://oauth2.googleapis.com/token',
//     auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
//     client_secret: 'zUDeLOcRXA2H_N_mOYc_Vmhm',
//     redirect_uris: ['http://localhost:3500'],
//     javascript_origins: ['http://localhost:3500'],
//   }

//   const oAuth2Client = new OAuth2Client(google.client_id, google.client_secret, google.redirect_uris[0])
//   const authorizeUrl = oAuth2Client.generateAuthUrl({
//     access_type: 'offline',
//     scope: 'https://www.googleapis.com/auth/youtube',
//   })
//   const url = `https://youtube.googleapis.com/youtube/v3/liveStreams?key=${config.PROVIDERS.YOUTUBE_TESTS.YOUTUBE_API_KEY}`

//   const res = await oAuth2Client.request({ url })
//   console.log(res.data)
// console.log(authorizeUrl)

// const tokenInfo = await oAuth2Client.getTokenInfo(oAuth2Client.credentials.access_token)
// console.log(tokenInfo)
// }
