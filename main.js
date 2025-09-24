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
    const shuffledCard = shuffle(gameCards);
    shuffledCards.forEach(emoji => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.emoji = emoji;

    const cardFront
