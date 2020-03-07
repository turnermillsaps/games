/*
    Current Issues:
    - Originally started this before we worked through rock-paper-scissors in class, so I now have better understanding
        - On the right track so far, but need to work through actually rendering this to the page
    

    Nim Abstraction
    - 2 Players
    - 16 pieces
    - each player can choose up to 3 pieces
    - player with 1 left loses

    What I need
    - variable to track player's turn
    - function that subtracts from total amount of pieces
    - function that updates the colors of the pieces
        - created the pebble-yellow class for the update
    - function that checks to see if only 1 piece is left and declares winner
*/

var content = document.getElementById('content');
var buttonTake = document.getElementById('take');
var inputValue = document.getElementById('takeInput').value;
var playerOne = true;
var totalPieces = 16;

// function to subtract from the total amount of pieces
function subtractPieces(count) {
    totalPieces -= count;
}

// function to track the input from the take button
buttonTake.addEventListener('click', function(){
    subtractPieces(inputValue);
    if (playerOne) {
        alert("Player 2's Turn!");
        playerOne = false;
    } else {
        alert("Player 1's Turn!");
        playerOne = true;
    }
});

// Create a while loop to end the game when totalPieces has reached 1
while (totalPieces > 1) {
    content.innerHTML = renderGame(nim);
}
// var nim = "Replace this with your own abstraction of Nim"

// content.innerHTML = renderGame(nim);




function renderGame(game) {
    // Change this render function to use the "game" parameter

    return `
        <div class="container d-flex flex-column justify-content-start align-items-center">
            <h4>There are 16 pebbles left</h4>
            <div class="w-50 text-center pebble-container">
                <div class="pebble"></div>
                <div class="pebble"></div>
                <div class="pebble"></div>
                <div class="pebble"></div>
                <div class="pebble"></div>
                <div class="pebble"></div>
                <div class="pebble"></div>
                <div class="pebble"></div>
                <div class="pebble"></div>
                <div class="pebble"></div>
                <div class="pebble"></div>
                <div class="pebble"></div>
                <div class="pebble"></div>
                <div class="pebble"></div>
                <div class="pebble"></div>
                <div class="pebble"></div>
            </div>
            <h4 class="mt-5">It's player 1's turn! How many pebbles will you take?</h4>
            <div>
                <select id="takeInput">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <button class="btn btn-primary" id="take">Take</button>
            </div>
        </div>
    `
}