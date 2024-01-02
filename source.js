
const renderBoard = (function(){
    // Function will take in a board as an array and displays
        //the contents of that array by assigning each mark to a cell on the
        //tictactoe grid
        const current_board = gameBoard();
        board = current_board.board;
        cell_counter = 1;
        for(let i = 0; i < 3; i++){
            for(let j = 0; j < 3; j++){
                const cell = document.querySelector(`.cell-${cell_counter}`);
                cell_counter += 1
                let mark = document.createElement("div")
                mark.innerHTML = board[i][j];
                mark.classList.add('mark')
                cell.appendChild(mark)
            }
        }
})();

function gameBoard(){
    const board = [ ['X','O',null],
                    [null,null,null],
                    [null,null,null]
                ];
    is_empty_board = false;

    return {board};
}

function player_X(){
    const X = 'X';
    let current_player = false;
    x_counter = 0, o_counter = 0, empty_counter = 0;
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            if(board[i][j] === null){
                empty_counter += 1;
            }
            if(board[i][j] === X){
                x_counter += 1;
            }
            if(board[i][j] === O){
                o_counter += 1;
            }
        }
    }

    if(o_counter < x_counter || empty_counter === 9){
        current_player = true;
    }
    // Using closures to privatize current_player
    const is_current_player = () => current_player;
    return {X, is_current_player}
}

function player_O(){
    const O = 'O';
    let current_player = false;
    x_counter = 0, o_counter = 0, empty_counter = 0;
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            if(board[i][j] === null){
                empty_counter += 1;
            }
            if(board[i][j] === X){
                x_counter += 1;
            }
            if(board[i][j] === O){
                o_counter += 1;
            }
        }
    }

    if(o_counter > x_counter){
        current_player = true;
    }
    // Using closures to privatize current_player
    const is_current_player = () => current_player;
    return {O, is_current_player}
}

function gameMode(){

    document.getElementById("multi-player").addEventListener('click', (e) => {
        document.getElementById("bot").classList.remove("active-button");
        document.getElementById("bot").classList.add("inactive-button");
        document.getElementById("multi-player").classList.remove("inactive-button");
        e.target.classList.add("active-button");
    });

    document.getElementById("bot").addEventListener('click', (e) => {
        document.getElementById("multi-player").classList.remove("active-button");
        document.getElementById("multi-player").classList.add("inactive-button");
        document.getElementById("bot").classList.remove("inactive-button");
        e.target.classList.add("active-button");  
    });
}



const game_runner = (function(){
    gameMode();
    let user = null
    let player = null
    
    document.getElementById("X").addEventListener('click', () => {
        const {X} = player_X()
        player = X 
    })
    document.getElementById("O").addEventListener('click', () => {
        const {O: player} = player_O()
    })

    while (player != null){
        if(player != null && player === 'X'){
            console.log(player)
        }
    }

})();


