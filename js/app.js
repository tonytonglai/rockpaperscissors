const RPS = ["Rock", "Paper", "Scissors"]; // will be used to draw from here...
const STATEMENTS = ["You lose :(", "You win!", "Tie game."];

function computerPlay() {
    let selection = Math.round((Math.random()*2)); // should ideally yield some number between 0-2...
    let RPSchoice = RPS[selection];
    return RPSchoice;
}

function winnerChecker(playerChoice, computerSelection) {
    // rock = 0, paper = 1, scissors = 2. 
    let playerIndex = RPS.indexOf(playerChoice);
    let computerIndex = RPS.indexOf(computerSelection);
    
    if (playerIndex == 0 && computerIndex == 2){
        // if player picks rock, comp picks scissors...
        return 1;
    } 

    if (playerIndex == 2 && computerIndex == 0) {
        return 0;
    }

    if (playerIndex == computerIndex) {
        return 2;
    }

    console.log(playerChoice > computerIndex);
    return +(playerChoice > computerIndex); // unary operator '+' used to convert bool into number.
}
// I'll make this the wrapper function...
function play(){
    let playerChoice = prompt("Enter a choice between 'Rock', 'Paper', 'Scissors': ");
    let computerSelection = computerPlay();
    console.log(computerSelection);
    return STATEMENTS[winnerChecker(playerChoice, computerSelection)];


}

console.log(play());



