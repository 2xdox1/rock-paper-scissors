// GET player selection
function playerSelection(selection) {
    function playerChoice() {
        return prompt('Please give your selection as: rock or paper or scissors!', '').toLowerCase();
    }
    selection = playerChoice();
    return selection;
}

// GET computer selection
function computerSelection(selection) {
    
    // GET random int. within a specified range (extreme values incl.)
    function getRandomNumber(min, max) {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() *
            (maxFloored - minCeiled + 1) + minCeiled);
    }

    // GET a random int. between 1-3 (extreme values incl.)
    let randomNumber = getRandomNumber(1, 3);

    // GET computer choice based on random int.    
    if (randomNumber === 1) {
        selection = "rock";
    } else if (randomNumber === 2) {
        selection = "paper";
    } else if (randomNumber === 3) {
        selection = "scissors";
    }
    return selection;
}

// EVALUATE a round
function evalRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection)  {
        return 'it is a tie!';
    } else if ((computerSelection == "rock" &&  playerSelection == "paper" ) || 
    (computerSelection == "paper" &&  playerSelection == "scissors" )  ||
    (computerSelection == "scissors" &&  playerSelection == "rock" )) {
        return `you win! ${playerSelection} beats ${computerSelection}.`;
    } else {
        return `you lose! ${computerSelection} beats ${playerSelection}.`;
    }
}

// PLAY a round
function playRound() {
    cs = computerSelection();
    ps = playerSelection();
    evalRound(cs, ps);
    return `As the computer selection is ${cs}, and the player selection is ${ps}, ${evalRound(cs, ps)}`;
}

// PLAY game
console.log(playGame());

function playGame() {
    // Play round 1 and save the result.
    let round1 = playRound();
    console.log('round 1: ' + round1);
    // Play round 2 and save the result
    let round2 = playRound();
    console.log('round 2: ' + round2);
    // Play round 3 and save the result
    let round3 = playRound();
    console.log('round 3: ' + round2);
    // Play round 4 and save the result
    let round4 = playRound();
    console.log('round 4: ' + round4);
    // Play round 5 and save the result
    let round5 = playRound();
    console.log('round 5: ' + round5);
    
    // GET the overall number of won rounds
    var win = round1 + round2 + round3 + round4 + round5;
    var winCount = (win.match(/win/g) || []).length;

    // GET the overall number of lost rounds
    var lose = round1 + round2 + round3 + round4 + round5;
    var loseCount = (lose.match(/lose/g) || []).length;

    // Compare the overall number of wins and losses, and show overall outcome
    if (winCount == loseCount)  {
        return `You won ${winCount} time(s), and lost ${loseCount} time(s). The outcome of the game is a tie!`;
    } else if (winCount >= loseCount) {
        return `You won ${winCount} time(s), and lost ${loseCount} time(s). You won the game! Well done!`;
    } else {
        return `You won ${winCount} time(s), and lost ${loseCount} time(s). You lost the game! Game over!`;
    }
}


