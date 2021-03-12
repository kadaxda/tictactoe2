//Selectors



//Gameboard module
let gameboard = (function() {

    let currentTurn = "X"

    let myBoard = ["X", "", "",
                    "", "", "",
                    "", "A", ""]

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
                field.textContent = currentTurn;
                changeTurn();            
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

    return {renderMyBoard}
})();

//Player factory
let Player = function(name, logo){
    return {name, logo}
}

gameboard.renderMyBoard();