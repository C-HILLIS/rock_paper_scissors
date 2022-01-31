playFiveGames()


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

function userPlay(){
    let userEntry = prompt("Enter either rock, paper, scissor");

    if(userEntry.toLowerCase() == 'rock' || userEntry.toLowerCase() == 'paper' || userEntry.toLowerCase() == 'scissor'){
        return userEntry;
    }
    else {
        console.log('Incorrect Entry!');
        userPlay()

    }
    
    
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

function playFiveGames(){
    for(let i=0;i<5;i++){
        playOneGame(computerPlay(),userPlay())
    }

}


