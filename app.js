//Selectors
const display = document.querySelector("#display")
const playerOneInput = document.querySelector("#playerOneInput")
const playerTwoInput = document.querySelector("#playerTwoInput")
const startBtn = document.querySelector("#startBtn")
const restartBtn = document.querySelector("#restartBtn")
const AiBtn = document.querySelector("#AiBtn")

//Player factory
let Player = function(name, logo){
    this.name = name;
    this.logo = logo;
    return {name, logo}
}

//Gameboard module
let gameboard = (function() {

    let winnerBoard;

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
            winnerBoard = "123";
        } else if(myBoard[3] == myBoard[4] && myBoard[4] == myBoard[5] && myBoard[5] != "") {
            if(myBoard[3] == "X") {
                winningPlayer = Player1;
            } else {
                winningPlayer = Player2;
            }
            display.textContent = `The Winner is ${winningPlayer.name} ${winningPlayer.logo}`
            winnerBoard = "345";
        } else if(myBoard[6] == myBoard[7] && myBoard[7] == myBoard[8] && myBoard[8] != "") {
            if(myBoard[6] == "X") {
                winningPlayer = Player1;
            } else {
                winningPlayer = Player2;
            }
            display.textContent = `The Winner is ${winningPlayer.name} ${winningPlayer.logo}`
            winnerBoard = "678";
        } 
        
        
        else if(myBoard[0] == myBoard[3] && myBoard[3] == myBoard[6] && myBoard[6] != "") {
            if(myBoard[0] == "X") {
                winningPlayer = Player1;
            } else {
                winningPlayer = Player2;
            }
            display.textContent = `The Winner is ${winningPlayer.name} ${winningPlayer.logo}`
            winnerBoard = "036";
        } else if(myBoard[1] == myBoard[4] && myBoard[4] == myBoard[7] && myBoard[7] != "") {
            if(myBoard[1] == "X") {
                winningPlayer = Player1;
            } else {
                winningPlayer = Player2;
            }
            display.textContent = `The Winner is ${winningPlayer.name} ${winningPlayer.logo}`
            winnerBoard = "147";
        } else if(myBoard[2] == myBoard[5] && myBoard[5] == myBoard[8] && myBoard[8] != "") {
            if(myBoard[2] == "X") {
                winningPlayer = Player1;
            } else {
                winningPlayer = Player2;
            }
            display.textContent = `The Winner is ${winningPlayer.name} ${winningPlayer.logo}`
            winnerBoard = "258";
        } 

        else if(myBoard[0] == myBoard[4] && myBoard[4] == myBoard[8] && myBoard[8] != "") {
            if(myBoard[0] == "X") {
                winningPlayer = Player1;
            } else {
                winningPlayer = Player2;
            }
            display.textContent = `The Winner is ${winningPlayer.name} ${winningPlayer.logo}`
            winnerBoard = "048";
        } else if(myBoard[2] == myBoard[4] && myBoard[4] == myBoard[6] && myBoard[6] != "") {
            if(myBoard[2] == "X") {
                winningPlayer = Player1;
            } else {
                winningPlayer = Player2;
            }
            display.textContent = `The Winner is ${winningPlayer.name} ${winningPlayer.logo}`
            winnerBoard = "246";
        }
        else {
            winnerBoard = "";
        }
        return winnerBoard;
    }

    function clearBoard() {
        for(let i = 0; i<myBoard.length; i++) {
            myBoard[i] = "";
        }
    }
   

    return {renderMyBoard, myBoard, checkIfWon, clearBoard, winnerBoard}
})();


//Game
let game = function() {

    Player1 = Player("Human", "X");
    Player2 = Player("PC", "O");

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }

    let AI = false;
    AiBtn.addEventListener("click", (e) => {
        if(AI == false) {
            AI = true;
        } else {
            AI = false;
        }

        if(AI == true) {
            gameboard.myBoard[getRandomInt(9)] = Player2.logo;
            gameboard.renderMyBoard()
        }
    })

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

    function addWinningClass(numbers) {
        if(numbers == "") {
            return;
        }

        let fields = document.querySelectorAll(".field");
        let temp = numbers.split("");
        console.log(temp)
        for(let i = 0; i<fields.length; i++) {
            fields[temp[i]].classList.add("winner")
        }
    }

    function removeWinningClass() {
        let fields = document.querySelectorAll(".field");
        for(let i = 0; i<fields.length; i++) {
            fields[i].classList.remove("winner")
        }
    }

    function AiMove() {
        let randomPick = getRandomInt(9);
        while(gameboard.myBoard[randomPick] == ""){
            randomPick = getRandomInt(9);
            gameboard.myBoard[randomPick] = Player2.logo;
            gameboard.renderMyBoard();
        }
    }

    let fields = document.querySelectorAll(".field");
    fields.forEach((field) => {
        field.addEventListener("click", (e) => {



            if(display.textContent != "") {
                gameboard.clearBoard();
                gameboard.renderMyBoard();
                
        }

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

                if(AI == true) {
                    AiMove();
                }

                display.textContent = "";
                console.log(gameboard.myBoard, currentTurn)
                gameboard.renderMyBoard();
                if(AI != true) {
                    changeTurn(); 
                }  
                gameboard.checkIfWon();
                
                addWinningClass(gameboard.checkIfWon())
                removeWinningClass();

    
    
            }
        })
    })
    
    return {Player1, Player2, fields}
}();
