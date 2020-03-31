import express from 'express'
import { isProduction } from '../../config'
import Agenda from 'agenda'
//const Agendash = require('agendash')

const app: express.Application = express()

const port = 80

export default () => {
  app.listen(port)
  console.log(`Server listening on port ${port}`)
  return app
}

/*export default async ({ agenda }: { agenda: Agenda }) => {
  if(!isProduction)
    app.use('/dash', Agendash(agenda))

  app.listen(port)

  console.log(`Server listening on port ${port}`)

  return app
}*/