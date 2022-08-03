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


function getPlayerChoice(e){
    console.log(this.classList.value);
}

const playerButtons = document.querySelectorAll('button');
playerButtons.forEach(playerButton => playerButton.addEventListener('click', getPlayerChoice));



function playRound(){

    const computerSelection = getComputerChoice();
    console.log(computerSelection);

    const playerSelection = getPlayerChoice();
    console.log(playerSelection);

    if(playerSelection === computerSelection){
        alert("Personne n'a gagné");
    }
    else if((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection
        === "scissors" && computerSelection === "paper") || (playerSelection === "paper"
        && computerSelection === "rock")){
            alert(`Vous avez gagné car ${playerSelection} gagne ${computerSelection} !`);
            return true;
        }
    else{
        alert(`Vous avez perdu car ${computerSelection} gagne ${playerSelection} !`);
        return false;
    }
}

function game(){
    let playerWin = 0;
    let computerWin = 0;

    for(let i = 0; i < 5; i++){
        let result = playRound();
        if (result){
            playerWin =+ 1;
        }
        else if(!result){
            computerWin =+ 1;
        }
    }

    alert(`le joueur à eu ${playerWin} et l'ordi à eu ${computerWin}`);
}