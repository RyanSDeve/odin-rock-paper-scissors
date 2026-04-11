const resultadoDiv = document.querySelector("#resultado");
let humanResult = 0;
let computerResult = 0;

function playRound(humanChoice, computerChoice) {
    let winner = "";
    if (humanChoice == "pedra" && computerChoice == "tesoura" || humanChoice == "tesoura" && computerChoice == "papel" || humanChoice == "papel" && computerChoice == "pedra") {
        humanScore++
        return winner = "Human wins";
    } else if (humanChoice == computerChoice) {
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

function getHumanChoice(humanChoice) {
    return humanChoice.toLowerCase();
}

function playGame () {
    let draws = 0;
    let humanScore = 0;
    let computerScore = 0;
    /* 
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
    */
    console.log(`Esse foi o resultado: Você ${humanScore} X Máquina ${computerScore}`);
}


function playRound(playerSelection) {
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice(playerSelection);
    let winner = "";

    if(humanResult === 5 || computerResult === 5){
        const resultadoFinal = document.createElement('h1');
        resultadoFinal.textContent = `Resultado final: ${humanResult} Humano x ${computerResult} Computador`
        return resultadoDiv.appendChild(resultadoFinal);
    }

    if (humanChoice == "pedra" && computerChoice == "tesoura" || humanChoice == "tesoura" && computerChoice == "papel" || humanChoice == "papel" && computerChoice == "pedra") {
        const novoResultado = document.createElement('p');
        novoResultado.textContent = `Você escolheu ${humanChoice} e o computador esculheu ${computerChoice}  |  VOCÈ VENCEU!!!`
        resultadoDiv.appendChild(novoResultado);
        humanResult++;
        return winner = "Human wins";
    } else if (humanChoice == computerChoice) {
        const novoResultado = document.createElement('p');
        novoResultado.textContent = `Você escolheu ${humanChoice} e o computador esculheu ${computerChoice}  |  DEU EMPATE.`
        resultadoDiv.appendChild(novoResultado);
        return winner = "Draw"
    } else {
        const novoResultado = document.createElement('p');
        novoResultado.textContent = `Você escolheu ${humanChoice} e o computador esculheu ${computerChoice}  |  O COMPUTADOR VENCEU :(`
        resultadoDiv.appendChild(novoResultado);
        computerResult++;
        return winner = "Computer wins";
    }
}