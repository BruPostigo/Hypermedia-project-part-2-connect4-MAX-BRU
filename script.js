const SETUP_SCREEN = document.getElementById('setup-screen');
const GAME_SCREEN = document.getElementById('game-screen');
const START_BTN = document.getElementById('start-game-btn');
const BOARD_CONTAINER = document.getElementById('game-board');
const SCORE_DISPLAY = document.getElementById('score-display');
const CURRENT_PLAYER_TURN = document.getElementById('current-player-turn');
const MODAL = document.getElementById('game-modal');
const MODAL_MESSAGE = document.getElementById('modal-message');
const NEW_ROUND_BTN = document.getElementById('new-round-btn');

const PLAYER1_INPUT = document.getElementById('player1-name');
const PLAYER2_INPUT = document.getElementById('player2-name');

const ROWS = 6;
const COLS = 7;

let board; 
let currentPlayer = 1; 
let playerNames = { 1: "Player 1", 2: "Player 2" };
let scores = { 1: 0, 2: 0 };
let isGameOver = false;




function initializeGame() {
    
    board = Array.from({ length: ROWS }, () => Array(COLS).fill(0));
    currentPlayer = 1;
    isGameOver = false;

    
    BOARD_CONTAINER.innerHTML = '';
    createBoardElements();
    
    
    updateScoreDisplay();
    updateTurnIndicator();
    MODAL.classList.add('hidden'); 
}


function createBoardElements() {
    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.dataset.row = r;
            cell.dataset.col = c;
            
            
            cell.addEventListener('click', () => handleCellClick(c)); 
            
            BOARD_CONTAINER.appendChild(cell);
        }
    }
}


function startGame() {
    
    playerNames[1] = PLAYER1_INPUT.value.trim() || "Player 1 (Red)";
    playerNames[2] = PLAYER2_INPUT.value.trim() || "Player 2 (Yellow)";

    
    initializeGame();

    
    SETUP_SCREEN.classList.add('hidden');
    GAME_SCREEN.classList.remove('hidden');
}



/**
 * @param {number} col 
 * @returns {number} 
 */

function getLowestAvailableRow(col) {
    for (let r = ROWS - 1; r >= 0; r--) {
        if (board[r][col] === 0) {
            return r;
        }
    }
    return -1; 
}

/**
 * @param {number} col 
 */

function handleCellClick(col) {
    if (isGameOver) return; 

    const row = getLowestAvailableRow(col);

    if (row !== -1) {
        
        board[row][col] = currentPlayer;

        
        dropChip(row, col, currentPlayer);

        
        if (checkWin(row, col)) {
            endGame(playerNames[currentPlayer] + " wins!");
            scores[currentPlayer]++;
            updateScoreDisplay(); 
        } else if (checkDraw()) {
            endGame("It's a draw!");
        } else {
            
            currentPlayer = currentPlayer === 1 ? 2 : 1;
            updateTurnIndicator();
        }
    }
}


function dropChip(row, col, player) {
    const cellIndex = row * COLS + col;
    const targetCell = BOARD_CONTAINER.children[cellIndex];
    
    const chip = document.createElement('div');
    chip.classList.add('chip', player === 1 ? 'red' : 'yellow');
    
    
    chip.style.transform = 'translate(-50%, -2000%)'; 
    targetCell.appendChild(chip);

    
    void chip.offsetWidth; 

    
    chip.style.transform = 'translate(-50%, -50%)';
}


function updateScoreDisplay() {
    SCORE_DISPLAY.textContent = `Score: ${playerNames[1]} ${scores[1]} - ${scores[2]} ${playerNames[2]}`;
}


function updateTurnIndicator() {
    CURRENT_PLAYER_TURN.textContent = `Current turn: ${playerNames[currentPlayer]} (${currentPlayer === 1 ? 'Red' : 'Yellow'})`;
}


function endGame(message) {
    isGameOver = true;
    MODAL_MESSAGE.textContent = message;
    MODAL.classList.remove('hidden');
}


function checkDraw() {
    
    return board[0].every(cell => cell !== 0);
}


function checkWin(r, c) {
    const player = board[r][c];

    
    const directions = [
        [0, 1],  
        [1, 0],  
        [1, 1],  
        [1, -1]  
    ];

    for (const [dr, dc] of directions) {
        let count = 1; 
        
 
        count += checkLine(r + dr, c + dc, dr, dc, player);
        

        count += checkLine(r - dr, c - dc, -dr, -dc, player);

        if (count >= 4) {
            return true;
        }
    }
    return false;
}


function checkLine(r, c, dr, dc, player) {
    let count = 0;
    while (r >= 0 && r < ROWS && c >= 0 && c < COLS && board[r][c] === player) {
        count++;
        r += dr;
        c += dc;
    }
    return count;
}


START_BTN.addEventListener('click', startGame);


NEW_ROUND_BTN.addEventListener('click', initializeGame);

