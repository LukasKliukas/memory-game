document.addEventListener('DOMContentLoaded', () => {
  const cardArray = [
    {
      name: 'briefcase',
      img: 'images/Briefcase-icon.png',
    },
    {
      name: 'briefcase',
      img: 'images/Briefcase-icon.png',
    },
    {
      name: 'Bulb',
      img: 'images/Bulb-icon.png',
    },
    {
      name: 'Bulb',
      img: 'images/Bulb-icon.png',
    },
    {
      name: 'Floppy',
      img: 'images/Floppy-Disk-icon.png',
    },
    {
      name: 'Floppy',
      img: 'images/Floppy-Disk-icon.png',
    },
    {
      name: 'Key',
      img: 'images/Key-icon.png',
    },
    {
      name: 'Key',
      img: 'images/Key-icon.png',
    },
    {
      name: 'Picture',
      img: 'images/picture-icon.png',
    },
    {
      name: 'Picture',
      img: 'images/picture-icon.png',
    },
    {
      name: 'Map',
      img: 'images/Map-icon.png',
    },
    {
      name: 'Map',
      img: 'images/Map-icon.png',
    },
  ];

  cardArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector('.grid');
  const resultDisplay = document.querySelector('#result');
  let cardsChosen = [];
  let cardsChosenId = [];
  let cardsWon = [];

  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      let card = document.createElement('img');
      card.setAttribute('src', 'images/blank.png');
      card.setAttribute('data-id', i);
      card.addEventListener('click', flipCard);
      grid.appendChild(card);
    }
  }

  function checkForMatch() {
    let cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    if (cardsChosen[0] === cardsChosen[1]) {
      alert('You found a match');
      cards[optionOneId].setAttribute('src', 'images/white.png');
      cards[optionTwoId].setAttribute('src', 'images/white.png');
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute('src', 'images/blank.png');
      cards[optionTwoId].setAttribute('src', 'images/blank.png');
      alert('Sorry, try again');
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent = 'Congratulation , you have found them all !';
    }
  }

  function flipCard() {
    let cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  createBoard();
});
