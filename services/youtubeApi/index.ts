import Fetch from 'node-fetch'
import { TResYoutubePlaylist, TPlaylist } from 'types'
import { config } from 'config'
const {
  YOUTUBE: {
    CHANNEL_ID,
    PLAYLIST: { PREDICAS, ESTUDIOS_BIBLICOS },
    PART: { SNIPPET },
    YOUTUBE_KEY,
  },
} = config

export const getEstudiosBiblicos = async () => {
  const res = await Fetch(
    `https://youtube.googleapis.com/youtube/v3/playlistItems?playlistId=${ESTUDIOS_BIBLICOS}&part=${SNIPPET}&key=${YOUTUBE_KEY}&channelId=${CHANNEL_ID}&maxResults=50`
  )

  const data: TResYoutubePlaylist = await res.json()

  const videos = []

  data.items.forEach(({ snippet }) => {
    if (snippet.title !== 'Private video') {
      videos.push({
        id: snippet.resourceId.videoId,
        title: snippet.title,
        description: snippet.description,
        url: `https://www.youtube.com/watch?v=${snippet.resourceId.videoId}`,
        thumbnails: snippet.thumbnails,
        publishedAt: snippet.publishedAt,
      })
    }
  })

  const playlist: TPlaylist = videos

  return playlist
}

export const getPredicas = async () => {
  const res = await Fetch(
    `https://youtube.googleapis.com/youtube/v3/playlistItems?playlistId=${PREDICAS}&part=${SNIPPET}&key=${YOUTUBE_KEY}&channelId=${CHANNEL_ID}&maxResults=50`
  )

  const data: TResYoutubePlaylist = await res.json()

  const videos = []

  data.items.forEach(({ snippet }) => {
    if (snippet.title !== 'Private video') {
      videos.push({
        id: snippet.resourceId.videoId,
        title: snippet.title,
        description: snippet.description,
        url: `https://www.youtube.com/watch?v=${snippet.resourceId.videoId}`,
        thumbnails: snippet.thumbnails,
        publishedAt: snippet.publishedAt,
      })
    }
  })

  const playlist: TPlaylist = videos

  return playlist
}

export const getStreamLive = async () => {
  const {
    YOUTUBE: { YOUTUBE_KEY },
  } = config

  const res = await Fetch(
    `https://youtube.googleapis.com/youtube/v3/liveBroadcasts&key=${YOUTUBE_KEY}&part=${SNIPPET}%2CcontentDetails%2Cstatus&broadcastType=all`
  )
  const data = await res.json()

  return data
}
