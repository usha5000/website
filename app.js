const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.send('Willkommen auf meiner Webseite!');
});

app.listen(port, () => {
  console.log(`Der Server läuft auf Port ${port}`);
});
