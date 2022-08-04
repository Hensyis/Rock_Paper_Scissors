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
    return e.target.className;
}

const playerButtons = document.querySelectorAll('button');
playerButtons.forEach(playerButton => playerButton.addEventListener('click', (e) => {
    round++;
    playRound(e);
    if(round === 6){
        round = 1;
        playerWin = 0;
        computerWin = 0;
    }

    score.textContent= `You : ${playerWin} vs Computer ${computerWin} and round : ${round}`
    scoreContainer.appendChild(score);
}));



function playRound(e){

    const computerSelection = getComputerChoice();
    console.log(computerSelection);

    const playerSelection = getPlayerChoice(e);
    console.log(playerSelection);

    if(playerSelection === computerSelection){
        alert("Personne n'a gagné");
    }
    else if((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection
        === "scissors" && computerSelection === "paper") || (playerSelection === "paper"
        && computerSelection === "rock")){
            alert(`Vous avez gagné car ${playerSelection} gagne ${computerSelection} !`);
            playerWin++;
        }
    else{
        alert(`Vous avez perdu car ${computerSelection} gagne ${playerSelection} !`);
        computerWin++;
    }
    alert(`le joueur à eu ${playerWin} vs l'ordi à eu ${computerWin} et nous sommes au ${round} round`);
}

function game(e){
    

    for(let i = 0; i < 5; i++){
        let result = playRound(e);
        if (result){
            playerWin =+ 1;
        }
        else if(!result){
            computerWin =+ 1;
        }
    }

    alert(`le joueur à eu ${playerWin} vs l'ordi à eu ${computerWin} et nous sommes au ${round} round`);
}

let round = 1;
let playerWin = 0;
let computerWin = 0;

const scoreContainer = document.querySelector('#scoreContainer');

const score = document.createElement('p');
