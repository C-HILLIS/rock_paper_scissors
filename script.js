

const rockButton = document.getElementById('rock')
const paperButton = document.getElementById('paper')
const scissorButton = document.getElementById('scissor')
const playButton = document.getElementById('play')
const userBox = document.getElementById('userBox')
const computerBox = document.getElementById('computerBox')    


rockButton.addEventListener('click', () => handleClick('rock'))
paperButton.addEventListener('click', () => handleClick('paper'))
scissorButton.addEventListener('click', () => handleClick('scissor'))
playButton.addEventListener('click', () => handleClick('play'))


function computerPlay(){
    let computerNumber = Math.floor(Math.random(0)*3)
    let computerResult;
    if(computerNumber===0){
        computerResult= 'rock'

    } else if(computerNumber===1){
        computerResult= 'scissor'
    }else{
        computerResult ='paper'
    }
    return computerResult

}

function handleClick(playerSelection){
    
    const computerSelection = computerPlay();

    playOneGame(computerSelection, playerSelection)
    userBox.textContent = playerSelection;
    computerBox.textContent = computerSelection;
}




function playOneGame(computerPlay, userPlay){
    

    console.log('Rock, Paper, Scissors and shoot');
    console.log('The computer played: ' + computerPlay);
    console.log('You played: ' + userPlay);
    

    if(computerPlay == 'scissor' && userPlay == 'rock'){
        console.log('You won!')
    }else if(computerPlay == 'scissor' && userPlay == 'paper'){
        console.log('You lost!')
    }else if(computerPlay == 'rock' && userPlay == 'scissor'){
        console.log('You lost!')
    }else if(computerPlay == 'rock' && userPlay == 'paper'){
        console.log('You won!')
    }else{
        console.log('You tied')
    }

}

