document.addEventListener('DOMContentLoaded', () => {

    const gameBoard = document.getElementById('game-board');
    const colors = [
        '#ff5733', '#33ff57', '#3357ff', '#ff33a1',
        '#a133ff', '#33ffa1', '#ffc300', '#c70039'
    ];
    const cardColors = [...colors, ...colors];
    let flippedCards = [];
    let matchedPairs = 0;
    let lockBoard = false;

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
        const shuffledCards = shuffle(cardColors);

        shuffledCards.forEach(value => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.dataset.value = value;

            const cardFront = document.createElement('div');
            cardFront.classList.add('card-face', 'card-front');
            cardFront.textContent = '?';

            const cardBack = document.createElement('div');
            cardBack.classList.add('card-face', 'card-back');
            cardBack.style.backgroundColor = value;

            card.appendChild(cardFront);
            card.appendChild(cardBack);
            card.addEventListener('click', flipCard);

            gameBoard.appendChild(card);
        });
    }

    function flipCard() {
        if (lockBoard || this.classList.contains('flip')) {
            return;
        }

        this.classList.add('flip');
        flippedCards.push(this);

        if (flippedCards.length === 2) {
            checkForMatch();
        }
    }

    function checkForMatch() {
        const [card1, card2] = flippedCards;
        const isMatch = card1.dataset.value === card2.dataset.value;

        isMatch ? disableCards() : unflipCards();
    }

    function disableCards() {
        flippedCards.forEach(card => {
            card.removeEventListener('click', flipCard);
        });

        matchedPairs++;
        resetBoard();

        if (matchedPairs === colors.length) {
            setTimeout(() => {
                alert('Parabéns, você venceu!');
            }, 500);
        }
    }

    function unflipCards() {
        lockBoard = true;

        setTimeout(() => {
            flippedCards.forEach(card => {
                card.classList.remove('flip');
            });
            resetBoard();
        }, 1200);
    }

    function resetBoard() {
        flippedCards = [];
        lockBoard = false;
    }

    createBoard();

});
