const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

const mongoDBConnection =
    process.env.MONGODB_CONNECTION ||
    'mongodb://root:example@localhost:27017/?authMechanism=DEFAULT';

    mongoose.connect(mongoDBConnection, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });

const Kontakt = mongoose.model('Kontakt',{
    email: String,
    betreff: String,
    nachricht: String
});

app.use(express.static(__dirname));

app.post('/kontakt', async (req, res) => {
    try {
      const kontakt = new Kontakt({
        email: req.body.email,
        betreff: req.body.betreff,
        nachricht: req.body.nachricht
      });
      await kontakt.save();
      
      console.log('Kontaktdaten wurden erfolgreich in die Datenbank eingefügt.');
      res.redirect('/subsites/bestatigung.html');
    } catch (err) {
      console.error(err);
      res.status(500).send('Fehler beim Speichern der Kontaktdaten.');
    }
  });

app.get('/', (req, res) => {
  res.send('Willkommen auf meiner Webseite!');
});

app.listen(port, () => {
  console.log(`Der Server läuft auf Port ${port}`);
});
