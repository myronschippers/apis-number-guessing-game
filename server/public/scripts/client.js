$(document).ready(handleReady);

function handleReady() {
  console.log("jquery is loaded!")
  // TODO: listen for submit of form
  $('#jsGuessForm').on('submit', submitGuesses);
}

// TODO: handle form submit
function submitGuesses(event) {
  event.preventDefault();
  const playerGuesses = [
    {
      name: 'Myron',
      guess: $('.js-myron-guess').val(),
    },
    {
      name: 'Ryan',
      guess: $('.js-ryan-guess').val(),
    },
    {
      name: 'Shelby',
      guess: $('.js-shelby-guess').val(),
    },
    {
      name: 'Ashleigh',
      guess: $('.js-ashleigh-guess').val(),
    }
  ];
  console.log('GUESSed:', playerGuesses);
  postGuesses(playerGuesses);
}

// TODO: send submitted guess to server
function postGuesses(currentGuesses) {
  $.ajax({
    type: "POST",
    url: "/api/guesses",
    data: {
      players: currentGuesses
    }
  })
  .then(function(response) {
    console.log('POST - response:', response);
    getHistory();
  })
  .catch(function(err) {
    console.log(err);
    alert('Something went terribly wrong!!!!!');
  });
}

// TODO: get all guesses history from server
function getHistory() {
  $.ajax({
    type: "GET",
    url: "/api/guesses",
  })
  .then(function(response) {
    console.log('GET - response:', response);
  })
  .catch(function(err) {
    console.log(err);
    alert('Something went terribly wrong!!!!!');
  });
}