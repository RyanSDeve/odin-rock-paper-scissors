function playRound(humanChoice, computerChoice) {
    let winner = "";
    if (humanChoice == "pedra" && computerChoice == "tesoura" || humanChoice == "tesoura" && computerChoice == "papel" || humanChoice == "papel" && computerChoice == "pedra"){
        humanScore++
        return winner = "Human wins";
    } else if(humanChoice == computerChoice){
        return winner = "Draw"
    } else {
        computerScore++
        return winner = "Computer wins";
    }
}


function getComputerChoice() {
    const resultado = Math.floor(Math.random() * 3);
    let computerChoice = "";

    switch (resultado) {
        case 0:
            computerChoice = "Pedra";
            break;

        case 1:
            computerChoice = "Tesoura";
            break;

        case 2:
            computerChoice = "Papel";
            break;

        default:
            "Deu algum problema..."
            break;
    }

    return computerChoice.toLowerCase();
}

function getHumanChoice() {
    let humanChoice = prompt("Escolha entre pedra, papel ou tesoura");

    return humanChoice.toLowerCase();
}

function playGame () {
    let draws = 0;
    let humanScore = 0;
    let computerScore = 0;
    for(let rounds = 0; rounds < 5; rounds++){
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        let winner = playRound(humanChoice, computerChoice);

        if(winner == "Human wins"){
            humanScore++
        } else if (winner == "Computer wins"){
            computerScore++
        } else {
            draws++
        }
    }    

    console.log(`Esse foi o resultado: Você ${humanScore} X Máquina ${computerScore}`);


    function playRound(humanChoice, computerChoice) {
    let winner = "";
    if (humanChoice == "pedra" && computerChoice == "tesoura" || humanChoice == "tesoura" && computerChoice == "papel" || humanChoice == "papel" && computerChoice == "pedra"){
        alert("Parabéns, você venceu a máquina!!!")
        return winner = "Human wins";
    } else if(humanChoice == computerChoice){
        alert("Deu empate!")
        return winner = "Draw"
    } else {
        alert("Computador venceu essa...")
        return winner = "Computer wins";
    }
}

}

playGame();