const cells = document.querySelectorAll('.cell');
const winnerMessage=document.querySelector('#winnerMessage');

let currentPlayer = 'X';
let winner=null;

cells.forEach(cell => {
    cell.addEventListener('click', handleClick);    
});

function handleClick(event) {
    const cell = event.target;

    if (cell.textContent.trim() !== '') 
        return;
    cell.textContent = currentPlayer;
    winner = checkForWin();
    if (winner) return handleGameOver();
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}


function checkForWin() {
    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    winningCombos.forEach(combo => {
        const [a, b, c] = combo;
        // console.log(`Combo #${index + 1}: Checking cells [${a}, ${b}, ${c}]`);
        // console.log(`Values: '${cells[a].textContent}', '${cells[b].textContent}', '${cells[c].textContent}'`);
        if (cells[a].textContent && 
            cells[a].textContent === cells[b].textContent &&
            cells[b].textContent === cells[c].textContent) {
            winner = currentPlayer;
        }
    });
    return winner;
}

function handleGameOver(){
    winnerMessage.textContent=`${winner} is the WINNER`
}

function restartGame(){
    cells.forEach(cell => {cell.textContent=''});
    winner=null;
    currentPlayer='X';
    winnerMessage.textContent=''
}