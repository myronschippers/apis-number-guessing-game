const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = 5000;

// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({extended:true}))

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

// TODO: function that generate rando number

// GET & POST Routes go here

// TODO: GET for all guesses history

// TODO: POST to receive my round of guesses

// TODO: POST to reset rando number

app.listen(PORT, () => {
  console.log ('Server is running on port', PORT)
})
