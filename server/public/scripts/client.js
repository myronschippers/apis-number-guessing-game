$(document).ready(handleReady);

function handleReady() {
  console.log("jquery is loaded!")
  // TODO: listen for submit of form
  $('#jsGuessForm').on('submit', submitGuesses);
  getHistory();
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
    render(response);
  })
  .catch(function(err) {
    console.log(err);
    alert('Something went terribly wrong!!!!!');
  });
}

function countGuesses(history) {
  let count = 0;
  for (let round of history) {
    count = count + round.players.length;
  }

  return count;
}

function render(history) {
  $('.js-total-rounds').text(`Total Rounds: ${history.length}`);
  $('.js-total-guesses').text(`Total Guesses: ${countGuesses(history)}`);

  const $listElement = $('.js-history');

  $listElement.empty();
  for (let round of history) {
    $listElement.append(`<li>ROUND</li>`);

    for (let player of round.players) {
      $listElement.append(`<li>${player.name} guessed: ${player.guess}, ${player.result}</li>`);
    }
  }
}