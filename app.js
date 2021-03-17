//Selectors
const display = document.querySelector("#display")
const playerOneInput = document.querySelector("#playerOneInput")
const playerTwoInput = document.querySelector("#playerTwoInput")
const startBtn = document.querySelector("#startBtn")
const restartBtn = document.querySelector("#restartBtn")

//Player factory
let Player = function(name, logo){
    this.name = name;
    this.logo = logo;
    return {name, logo}
}

//Gameboard module
let gameboard = (function() {

    let myBoard = [ "", "", "",
                    "", "", "",
                    "", "", ""]

    function renderMyBoard() {
        let fields = document.querySelectorAll(".field");
        for(let i = 0; i < myBoard.length; i++) {
            fields[i].textContent = myBoard[i];
        }
    }


    function checkIfWon() {
        if(myBoard[0] == myBoard[1] && myBoard[1] == myBoard[2] && myBoard[2] != "") {
            if(myBoard[0] == "X") {
                winningPlayer = Player1;
            } else {
                winningPlayer = Player2;
            }
            display.textContent = `The Winner is ${winningPlayer.name} ${winningPlayer.logo}`
        } else if(myBoard[3] == myBoard[4] && myBoard[4] == myBoard[5] && myBoard[5] != "") {
            if(myBoard[3] == "X") {
                winningPlayer = Player1;
            } else {
                winningPlayer = Player2;
            }
            display.textContent = `The Winner is ${winningPlayer.name} ${winningPlayer.logo}`
        } else if(myBoard[6] == myBoard[7] && myBoard[7] == myBoard[8] && myBoard[8] != "") {
            if(myBoard[6] == "X") {
                winningPlayer = Player1;
            } else {
                winningPlayer = Player2;
            }
            display.textContent = `The Winner is ${winningPlayer.name} ${winningPlayer.logo}`
        } 
        
        
        else if(myBoard[0] == myBoard[3] && myBoard[3] == myBoard[6] && myBoard[6] != "") {
            if(myBoard[0] == "X") {
                winningPlayer = Player1;
            } else {
                winningPlayer = Player2;
            }
            display.textContent = `The Winner is ${winningPlayer.name} ${winningPlayer.logo}`
        } else if(myBoard[1] == myBoard[4] && myBoard[4] == myBoard[7] && myBoard[7] != "") {
            if(myBoard[1] == "X") {
                winningPlayer = Player1;
            } else {
                winningPlayer = Player2;
            }
            display.textContent = `The Winner is ${winningPlayer.name} ${winningPlayer.logo}`
        } else if(myBoard[2] == myBoard[5] && myBoard[5] == myBoard[8] && myBoard[8] != "") {
            if(myBoard[2] == "X") {
                winningPlayer = Player1;
            } else {
                winningPlayer = Player2;
            }
            display.textContent = `The Winner is ${winningPlayer.name} ${winningPlayer.logo}`
        } 

        else if(myBoard[0] == myBoard[4] && myBoard[4] == myBoard[8] && myBoard[8] != "") {
            if(myBoard[0] == "X") {
                winningPlayer = Player1;
            } else {
                winningPlayer = Player2;
            }
            display.textContent = `The Winner is ${winningPlayer.name} ${winningPlayer.logo}`
        } else if(myBoard[2] == myBoard[4] && myBoard[4] == myBoard[6] && myBoard[6] != "") {
            if(myBoard[2] == "X") {
                winningPlayer = Player1;
            } else {
                winningPlayer = Player2;
            }
            display.textContent = `The Winner is ${winningPlayer.name} ${winningPlayer.logo}`
        }
    }
    
    function clearBoard() {
        for(let i = 0; i<myBoard.length; i++) {
            myBoard[i] = "";
        }
    }
   

    return {renderMyBoard, myBoard, checkIfWon, clearBoard}
})();


//Game
let game = function() {

    Player1 = Player("Human", "X");
    Player2 = Player("PC", "O")

    startBtn.addEventListener("click", () => {
        Player1 = Player(playerOneInput.value, "X")
        Player2 = Player(playerTwoInput.value, "O")
    })

    restartBtn.addEventListener("click", function() {
        gameboard.clearBoard();
        gameboard.renderMyBoard();
    })

    let currentTurn = Player1.logo;

    function changeTurn() {
        if(currentTurn == "X") {
            currentTurn = "O"
        } else {
            currentTurn = "X"
        };
    }

    let fields = document.querySelectorAll(".field");
    fields.forEach((field) => {
        field.addEventListener("click", (e) => {
            if(field.textContent == "") {
                if(field.classList.contains("top-l")) {
                    gameboard.myBoard[0] = currentTurn;
                } else if(field.classList.contains("top-m")) {
                    gameboard.myBoard[1] = currentTurn;
                } else if(field.classList.contains("top-r")) {
                    gameboard.myBoard[2] = currentTurn;
                }

                else if(field.classList.contains("mid-l")) {
                    gameboard.myBoard[3] = currentTurn;
                } else if(field.classList.contains("mid-m")) {
                    gameboard.myBoard[4] = currentTurn;
                } else if(field.classList.contains("mid-r")) {
                    gameboard.myBoard[5] = currentTurn;
                }

                else if(field.classList.contains("bot-l")) {
                    gameboard.myBoard[6] = currentTurn;
                } else if(field.classList.contains("bot-m")) {
                    gameboard.myBoard[7] = currentTurn;
                } else if(field.classList.contains("bot-r")) {
                    gameboard.myBoard[8] = currentTurn;
                }

                display.textContent = "";
                console.log(gameboard.myBoard, currentTurn)
                gameboard.renderMyBoard();
                changeTurn();   
                gameboard.checkIfWon();
                
                if(display.textContent != "") {
                        gameboard.clearBoard();
                        gameboard.renderMyBoard();
                }
            }
        })
    })
    
    return {Player1, Player2, fields}
}();
