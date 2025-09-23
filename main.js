document.addEventListener('DOMcontentLoaded', () => {
    const gameBoard = document.getElementById('game-board');
    const colors = [
        '#ff5733', '#33ff57', '#3357ff', '#ff33a1',
        '#a133ff', '#33ffa1', '#ffc300', '#c70039'
    ];
    const cardColors = [...colors, ...colors]; // Duplica as cores para formar os pares
    let flippedCards = [];
    let matchedPairs = 0;
    let lockBoard = false;
}
