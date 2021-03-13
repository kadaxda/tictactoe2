//Selectors
const display = document.querySelector("#display")

//Player factory
let Player = function(name, logo){
    this.name = name;
    this.logo = logo;
    return {name, logo}
}

//Game
let game = function() {

    Player1 = Player("Human", "X");
    Player2 = Player("PC", "O")
    
    return {Player1, Player2}
}();


//Gameboard module
let gameboard = (function() {

    let currentTurn = Player1.logo

    let myBoard = [ "", "", "",
                    "", "", "",
                    "", "", ""]

    function renderMyBoard() {
        let fields = document.querySelectorAll(".field");
        for(let i = 0; i < myBoard.length; i++) {
            fields[i].textContent = myBoard[i];
        }
    }

    let fields = document.querySelectorAll(".field");
    fields.forEach((field) => {
        field.addEventListener("click", (e) => {
            if(field.textContent == "") {
                if(field.classList.contains("top-l")) {
                    myBoard[0] = currentTurn;
                } else if(field.classList.contains("top-m")) {
                    myBoard[1] = currentTurn;
                } else if(field.classList.contains("top-r")) {
                    myBoard[2] = currentTurn;
                }

                else if(field.classList.contains("mid-l")) {
                    myBoard[3] = currentTurn;
                } else if(field.classList.contains("mid-m")) {
                    myBoard[4] = currentTurn;
                } else if(field.classList.contains("mid-r")) {
                    myBoard[5] = currentTurn;
                }

                else if(field.classList.contains("bot-l")) {
                    myBoard[6] = currentTurn;
                } else if(field.classList.contains("bot-m")) {
                    myBoard[7] = currentTurn;
                } else if(field.classList.contains("bot-r")) {
                    myBoard[8] = currentTurn;
                }
                console.log(myBoard)
                renderMyBoard();
                changeTurn();   
                checkIfWon();         
            }
        })
    })

    function changeTurn() {
        if(currentTurn == "X") {
            currentTurn = "O"
        } else {
            currentTurn = "X"
        };
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
    

    return {renderMyBoard, myBoard}
})();


