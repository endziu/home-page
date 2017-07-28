const express = require('express');
const cors = require('cors');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const tracks = require('./db/tracks.json');
const takeFirst = arr => arr[0];

app
  .prepare()
  .then(() => {
    const server = express();

    server.get(['/api', '/api/:id'], cors(), (req, res) => {
      const titlesMatch = track => track.permalink === req.params.id;
      req.params.id
        ? res.send(takeFirst(tracks.filter(titlesMatch)))
        : res.send(tracks);
    });

    server.get('/s/:id', (req, res) => {
      const queryParams = { id: req.params.id };
      app.render(req, res, '/sound', queryParams);
    });

    server.get('*', (req, res) => {
      return handle(req, res);
    });
    server.listen(3000, err => {
      if (err) throw err;
      console.log(`> Ready on port: 3000`);
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
