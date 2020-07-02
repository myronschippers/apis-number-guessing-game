const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = 5000;

// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({extended:true}))

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

const minNum = 1;
const maxNum = 25;
let randoNumAnswer = 0;

// TODO: function that generate rando number
function randomNumber(min, max){
	return Math.floor(Math.random() * (1 + max - min) + min);
}

// GET & POST Routes go here

// TODO: GET for all guesses history

// TODO: POST to receive my round of guesses

// TODO: POST to reset rando number

app.listen(PORT, () => {
  randoNumAnswer = randomNumber(minNum, maxNum);
  console.log('RANDO:', randoNumAnswer);
  console.log ('Server is running on port', PORT);
})
