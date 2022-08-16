import { TConfig } from 'types'

const config: TConfig = {
  CMS: {
    BASE_URL: 'https://lcpcaracas-cms.herokuapp.com' || 'http://localhost:1337',
    API: {
      ARTICULOS: '/articulos',
      CATEGORIAS: '/categorias',
    },
  },

  PROVIDERS: {
    GOOGLE: {
      clientId: process.env.NEXT_PUBLIC_PROVIDER_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_PROVIDER_GOOGLE_CLIENT_SECRECT,
      GOOGLE_TEST_OAUTH_ID_CLIENT: process.env.GOOGLE_TEST_OAUTH_ID_CLIENT,
      GOOGLE_TEST_OAUTH_SECRET_CLIENT: process.env.GOOGLE_TEST_OAUTH_SECRET_CLIENT,
    },
    YOUTUBE_TESTS: {
      YOUTUBE_API_KEY: process.env.YOUTUBE_API_KEY,
    },
  },

  FIREBASE: {
    apiKey: 'AIzaSyBfJ-4c8hMUfODbt5hIDbdaISgZqfayr6Q',
    authDomain: 'lcp-caracas-test.firebaseapp.com',
    databaseURL: 'https://lcp-caracas-a5bf3.firebaseio.com',
    projectId: 'lcp-caracas-test',
    storageBucket: 'lcp-caracas-test.appspot.com',
    messagingSenderId: '456792375106',
    appId: '1:456792375106:web:df022c46417a443b72d2db',
    measurementId: 'G-WFZ5XRWKYE',
  },

  FIREBASE_ADMIN: {
    credentials: {
      projectId: 'lcp-caracas-test',
      clientEmail: 'kevin.tech.dev@gmail.com',
      privateKey: process.env.NEXT_PUBLIC_FIREBASE_ADMIN_CREDENTIAL_API_PRIVATE_KEY,
    },
  },

  YOUTUBE: {
    YOUTUBE_KEY: 'AIzaSyB2A9U01XTjPoYAJHMa4VQrmkY1g_wv6UM',
    USER_ID: 'tttlnW0skxAug4MOo7CaeQ',
    CHANNEL_ID: 'UCtttlnW0skxAug4MOo7CaeQ',
    PART: {
      ID: 'id',
      CONTENT_DETAILS: 'contentDetails',
      SNIPPET: 'snippet',
      STATUS: 'status',
    },
    PLAYLIST: {
      PREDICAS: 'PL58LRwRNUkTyDapBIRKaSh7ijipcqZqhN',
      ESTUDIOS_BIBLICOS: 'PL58LRwRNUkTxCeJRQfZ1IjIuX8Etmp6_J',
    },
  },
}

export { config }
