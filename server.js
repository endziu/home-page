const express = require('express')
const cors = require('cors')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const tracks = require('./db/sounds.json')

app
  .prepare()
  .then(() => {
    const server = express()

    server.use(cors())

    server.use(express.static('public'))

    server.get(['/api'], (req, res) => {
      res.send(tracks)
    })

    server.get('/music/:id', (req, res) => {
      const queryParams = { id: req.params.id }
      app.render(req, res, '/music', queryParams)
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(3000, err => {
      if (err) throw err
      console.log(`> Ready on port: 3000`)
    })
  })
  .catch(ex => {
    console.error(ex.stack)
    process.exit(1)
  })
