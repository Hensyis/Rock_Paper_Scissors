function getComputerChoice(){
    let nombreAleatoire = Math.floor(Math.random() * 10);
    if(nombreAleatoire < 3){
        return "scissors"
    }
    else if(nombreAleatoire < 6){
        return "paper";
    }
    else{
        return "rock";
    }
}
const computerSelection = getComputerChoice();
    console.log(computerSelection);

function getPlayerChoice(){
    let playerSelection = prompt("Rock, paper or scissors ? ", "");
    return playerSelection.toLowerCase();
}

const playerSelection = getPlayerChoice();
console.log(playerSelection);

function playRound(playerSelection, computerSelection){

    if(playerSelection === computerSelection){
        alert("Personne n'a gagné");
    }
    else if((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection
        === "scissors" && computerSelection === "paper") || (playerSelection === "paper"
        && computerSelection === "rock")){
            alert(`Vous avez gagné car ${playerSelection} gagne ${computerSelection} !`);
        }
    else{
        alert(`Vous avez gagné car ${computerSelection} gagne ${playerSelection} !`);
    }
}
