const express = require('express')
const cors = require('cors')
const next = require('next')
const compression = require('compression')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app
  .prepare()
  .then(() => {
    const server = express()

    server.use(compression())
    server.use(cors())
    server.use(express.static('./public'))

    server.get('/music/:ID', (req, res) => {
      const queryParams = { ID: req.params.ID }
      app.render(req, res, '/music', queryParams)
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(16662, (err) => {
      if (err) throw err
      console.log(`> Ready on port: 16662`)
    })
  })
  .catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
  })
