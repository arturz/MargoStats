const express = require('express')
const helmet = require('helmet')
const next = require('next')
const loadServer = require('./server/index')

const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev })
const handle = nextApp.getRequestHandler()

nextApp.prepare().then(() => {
  const app = express()

  if(!dev){
    app.enable('trust proxy')
    app.use(helmet())
  }

  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))

  loadServer(app)

  app.get('/favicon.ico', (req, res) => (
    res.status(200).sendFile('favicon.ico', { root: __dirname + '/static/' })
  ))

  app.get('/service-worker.js', (req, res) => (
    res.status(200).sendFile('service-worker.js', { root: __dirname + '/.next/' })
  ))

  app.get('*', (req, res) => {
    return handle(req, res)
  })

  app.listen(80, (err) => {
    if(err)
      throw err

    if(dev)
      console.log('> Ready on http://localhost/')
  })
}).catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})