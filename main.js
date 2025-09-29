document.addEventListener('DOMcontentLoaded', () => {
    const gameBoard = document.getElementById('game-board');
    const colors = [
        '#ff5733', '#33ff57', '#3357ff', '#ff33a1',
        '#a133ff', '#33ffa1', '#ffc300', '#c70039'
    ];
    const cardColors = [...colors, ...colors];
    let flippedCards = [];
    let matchedPairs = 0;
    let lockBoard = false;

const gameBoard = document.getElementById('game-board');

function shuffle(array) {
    let currentIndex = array.length;
    let randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
    return array;
}

function createBoard() {
    const shuffledCard = shuffle(cardValues);

    shuffledCards.forEach(value => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.value = value;

    const cardFront = document.createElement('div');
    cardFront.classList.add('card-face, 'card-front');
        cardFront.textContent = '?'; 

        const cardBack = document.createElement('div');
        cardBack.classList.add('card-face, 'card-back);
        cardBack.textContent = value;

        card.appendChild(cardFront);
        card.appendChild(cardBack);

        card.addEventListener('click', flippedCard);

        gameBoard.appendChild(card);
    });
}

function flippedCard() {
    if (lockBoard || this.classList.contains('flip')) {
        return;
    }

    this.classList.add('flip');
    flippedCards.push
}
