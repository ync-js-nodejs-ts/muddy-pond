import { NextApiRequest, NextApiResponse } from 'next'
import { TYoutubeLiveRes } from 'types/youtube'
import { db } from 'services/firebase'
import NextCors from 'nextjs-cors'

interface CustomNextApiRequest extends NextApiRequest {
  body: TYoutubeLiveRes
}

export default async (req: CustomNextApiRequest, res: NextApiResponse) => {
  await NextCors(req, res, {
    methods: ['GET', 'POST'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  })

  if (req.method === 'POST' && req.body.youtubeLive) {
    if (req.body.youtubeLive.snippet.liveBroadcastContent === 'live') {
      const { id, snippet } = req.body.youtubeLive

      const videoYoutubeLive = {
        thumbnails: snippet.thumbnails,
        channelTitle: snippet.channelTitle,
        channelId: snippet.channelId,
        publishTime: snippet.publishTime,
        publishedAt: snippet.publishedAt,
        description: snippet.description,
        typeVideo: snippet.liveBroadcastContent,
        url: `https://www.youtube.com/watch?v=${id.videoId}`,
        title: snippet.title,
      }

      db.collection('notifications')
        .doc('youtube_live')
        .update({
          live: true,
        })
        .then(() => {
          res.status(200).json({
            message: 'Notificación Actualizada!',
          })
        })
        .catch(() => {
          res.status(500).json({
            message: 'Hubo un error al actualizar la notificacion!',
          })
        })

      db.collection('notifications')
        .doc('youtube_live')
        .collection('video')
        .doc('content')
        .update({
          title: videoYoutubeLive.title,
          type: videoYoutubeLive.typeVideo,
          channelId: videoYoutubeLive.channelId,
          channelTitle: videoYoutubeLive.channelTitle,
          description: videoYoutubeLive.description,
          publishTime: videoYoutubeLive.publishTime,
          publishedAt: videoYoutubeLive.publishedAt,
          thumbnails: {
            defaultUrl: videoYoutubeLive.thumbnails.default.url,
            highUrl: videoYoutubeLive.thumbnails.high.url,
            mediumUrl: videoYoutubeLive.thumbnails.medium.url,
          },
        })
        .then(() => {
          res.status(200).json({
            message: 'Contenido del video en directo, actualizado!',
          })
        })
        .catch(() => {
          res.status(500).json({
            message: 'Hubo un error al actualizar el Contenido del video en directo!',
          })
        })
    } else {
      res.status(500).json({
        message: 'Peticion no soportada',
      })
    }
  }
}
