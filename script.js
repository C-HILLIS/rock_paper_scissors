let userScore = 0
let computerScore = 0

function playOneGame(computerPlay, userPlay){
    

    console.log('Rock, Paper, Scissors and shoot');
    console.log('The computer played: ' + computerPlay);
    console.log('You played: ' + userPlay);
    

    if(computerPlay == 'scissor' && userPlay == 'rock'){
        userScore++
        return('You won the round!')
        
    }else if(computerPlay == 'scissor' && userPlay == 'paper'){
        computerScore++
        return('You lost the round!')
        
    }else if(computerPlay == 'rock' && userPlay == 'scissor'){
        computerScore++
        return('You lost the round!')
        
    }else if(computerPlay == 'rock' && userPlay == 'paper'){
        userScore++
        return('You won the round!')
        
    }else if(computerPlay == 'paper' && userPlay == 'scissor'){
        userScore++
        return('You won the round!')
        
    
    }else if(computerPlay == 'paper' && userPlay == 'rock'){
        computerScore++
        return('You lost this round!')
        
    
    }
    else{
        return('You tied this round')
    }
    
}
function isGameOver() {
    return userScore === 5 || computerScore === 5
  }

const rockButton = document.getElementById('rock')
const paperButton = document.getElementById('paper')
const scissorButton = document.getElementById('scissor')
const resetButton = document.getElementById('reset')
const userBox = document.getElementById('userBox')
const computerBox = document.getElementById('computerBox')
   
const winnerResult = document.getElementById('winner')

const userScoreNum= document.getElementById('userScore')
const computerScoreNum = document.getElementById('computerScore')




rockButton.addEventListener('click', () => handleClick('rock'))
paperButton.addEventListener('click', () => handleClick('paper'))
scissorButton.addEventListener('click', () => handleClick('scissor'))
resetButton.addEventListener('click', () => handleClick('reset'))



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
    if(playerSelection=='reset'){
        reset()
        updateScore();
    }
    else{

    if(isGameOver()){
        winner.textContent = "The game is finished"
        return;
    }

    
    

    
     
    const computerSelection = computerPlay();

    winner.textContent = playOneGame(computerSelection, playerSelection)
    imageUpdate(userBox,playerSelection)
    imageUpdate(computerBox,computerSelection)
    updateScore()
    
    if(isGameOver()){
        
        winner.textContent = "The game is finished"
        
        
    }
    
}
    
}



function reset(){
    userScore=0;
    computerScore=0;
    winner.textContent = "Game has been reset"
    imageUpdate(userBox,'reset')
    imageUpdate(computerBox,)

}



function updateScore(){
    userScoreNum.textContent = `Player: ${userScore}`
    computerScoreNum.textContent = `computer: ${computerScore}`
}


function imageUpdate(player,selection){

    if(selection == 'paper'){
        player.src= "pictures/paper.png"
        
    }
    else if(selection == 'rock'){
        player.src= "pictures/rock.png"
    }else if(selection =='scissor'){
        
        player.src= "pictures/scissor.png"
    }else

    player.src = "pictures/questionmark.png"
        return;

}

