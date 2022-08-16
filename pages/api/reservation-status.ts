import { NextApiRequest, NextApiResponse } from 'next'
import NextCors from 'nextjs-cors'

import { reservationsStatusDB } from 'services/firebase'

interface CustomNextApiRequest extends NextApiRequest {
  body: {
    changeStatus: boolean
  }
}

export default async (req: CustomNextApiRequest, res: NextApiResponse) => {
  await NextCors(req, res, {
    methods: ['GET', 'POST'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  })

  if (req.method === 'POST') {
    if (req.body.changeStatus === true) {
      reservationsStatusDB
        .set({ isActive: true })
        .then(() => {
          res.status(200).json({
            message: 'Habilitando Reservaciones!',
            body: req.body.changeStatus,
          })
        })
        .catch(() => {
          res.status(500).json({
            message: 'No se pudo actualizar el estado de las reservaciones.',
            body: req.body.changeStatus,
          })
        })
    }

    if (req.body.changeStatus === false) {
      reservationsStatusDB
        .set({ isActive: false })
        .then(() => {
          res.status(200).json({
            message: 'Habilitando Reservaciones!',
            body: req.body.changeStatus,
          })
        })
        .catch(() => {
          res.status(500).json({
            message: 'No se pudo actualizar el estado de las reservaciones.',
            body: req.body.changeStatus,
          })
        })
      res.status(200).json({
        message: 'Deshabilitando Reservaciones!',
        body: req.body.changeStatus,
      })
    }
  } else {
    res.status(500).json({
      message: 'Request not Aviable',
      body: req.body,
    })
  }
}
