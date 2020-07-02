const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = 5000;

// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

const minNum = 1;
const maxNum = 25;
let randoNumAnswer = 0;
const history = [];

// TODO: function that generate rando number
function randomNumber(min, max){
	return Math.floor(Math.random() * (1 + max - min) + min);
}

// GET & POST Routes go here

// TODO: GET for all guesses history
app.get('/api/guesses', (req, res) => {
  res.send(history);
});

// TODO: POST to receive my round of guesses
app.post('/api/guesses', (req, res) => {
  const playerGuesses = req.body;
  // req.body structure
  // {
  //   players: [
  //     {
  //       name: 'string',
  //       guess: Number,
  //     }
  //   ]
  // }

  history.push(playerGuesses);
  console.log(history);
  res.sendStatus(201);
});

// TODO: POST to reset rando number

app.listen(PORT, () => {
  randoNumAnswer = randomNumber(minNum, maxNum);
  console.log('RANDO:', randoNumAnswer);
  console.log ('Server is running on port', PORT);
})
