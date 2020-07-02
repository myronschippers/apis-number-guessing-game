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
}

// TODO: send submitted guess to server

// TODO: get all guesses history from server