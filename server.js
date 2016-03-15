import express from 'express';
import path from 'path';

const STATIC_DIR = path.join(__dirname, 'build');

const app = express();


app.get('/', (req, res) => {
  res.send(`<!DOCTYPE html>
  <html>
    <head>
      <title>2.x Flux with redux</title>
    </head>
    <body>
      <div id="root"></div>
      <script type="text/javascript" src="/static/bundle.js"></script>
    </body>
  </html>`);
});

app.get('/static/bundle.js', (req, res) => {
  res.sendFile('bundle.js', { root: STATIC_DIR });
});

app.listen(3000);
