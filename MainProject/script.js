

const computerPlay = () => {
    let arrayOpt = ["Rock", "Paper", "Scissors"];
    let randomNum = Math.floor(Math.random() * arrayOpt.length)
    return arrayOpt[randomNum];
}





const playRound = (playerSelection, computerSelection) => {
    if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
        return "Tie";
    } else if (playerSelection.toLowerCase() == "rock") {
        if (computerSelection.toLowerCase() == "paper") {
            return "You Lose! Paper beats Rock";
        } else {
            return "You Win! Rock beats Scissor";
        }
    } else if (playerSelection.toLowerCase() == "paper") {
        if (computerSelection.toLowerCase() == "rock") {
            return "You Win! Paper beats Rock";
        } else {
            return "You Lose! Scissor beats Paper"
        }

    } else if (playerSelection.toLowerCase() == "scissor") {
        if (computerSelection.toLowerCase() == "rock") {
            return "You Lose! Rock beats Scissor"
        } else {
            return "You Win! Scissor beats Paper"
        }
    }

}


const game = () => {

    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        console.log("--------------------Round", i + 1, "-----------------------");
        const playerSelection = prompt("Enter your selction:Rock or Paper or Scissors")
        const computerSelection = computerPlay();
        console.log("Computer selection", computerSelection);
        console.log("player  selection", playerSelection);
        const gameOutcome = playRound(playerSelection, computerSelection);
        console.log("Results:", gameOutcome);

        if (gameOutcome.includes("Win")) {
            ++playerScore
        } else if (gameOutcome.includes("Lose")) {
            ++computerScore
        } else {
            ++playerScore
            ++computerScore
        }
    }
    if (playerScore == computerScore) {
        return "Tie. \n Player score = " + playerScore + "\n Computer score = " + computerScore;
    } else if (playerScore > computerScore) {
        return "Congratulations!!!You are the Winnner. \n Player score = " + playerScore + " \n Computer score = " + computerScore
    } else {
        return "You Lost.\n Player score = " + playerScore + " \n Computer score = " + computerScore
    }

}
console.log(game());