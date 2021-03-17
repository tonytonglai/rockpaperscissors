const RPS = ["Rock", "Paper", "Scissors"]; // will be used to draw from here...
const STATEMENTS = ["You lose :(", "You win!", "Tie game."];
let runningSum = 0;

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

    return +(playerIndex > computerIndex); // unary operator '+' used to convert bool into number.
}
// I'll make this the wrapper function...

function winConverter(value) {
    if (value == 2) {
        return 0.5;
    }

    return value;
}

function play(){
    let playerChoice = prompt("Enter a choice between 'Rock', 'Paper', 'Scissors': ");
    let computerSelection = computerPlay();
    console.log(`Computer Selection is ${computerSelection}`);
    let total = +winnerChecker(playerChoice, computerSelection); // 0 is win, 1 is loss, 2 is tie...
    runningSum += winConverter(total);
    console.log(`Running total is ${runningSum}`);

    return STATEMENTS[winnerChecker(playerChoice, computerSelection)];


}

function playToFive(runningSum){
    // runningSum = 0;
    let totalRuns = 0;
    while (totalRuns < 5) {
        play();
        totalRuns++;
    }

    console.log(`Your running sum was ${runningSum}`);
    if (runningSum > 2.5) {
        return STATEMENTS[1];
    } else if (runningSum == 2.5) {
        return STATEMENTS[2];
    } else {
        return STATEMENTS[0];
    }

}

console.log(playToFive());