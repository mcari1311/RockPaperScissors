// make a function to pick random number
function randomNumber() {
    return Math.floor(Math.random() * (5 - 3 + 1) + 3 )
}

// make a function for computer to choose rock,paper,scissors
function computerSelection() {
   if (randomNumber() == 3) {
       return 'Rock'
   }
   else if (randomNumber() == 4) {
       return 'Paper'
   }
   else {
       return 'Scissors'
   }
}

console.log('The computer picked ' + computerSelection())

let playerPick 

// ask player for their pick 
function playerSelection() {
    const playerSelection = prompt('Pick "Rock", "Paper", "Scissors"')
    return 'You picked ' + playerSelection
}

console.log(playerSelection())

//use all input to run game in console 
function game() {
    if (playerSelection() == 'Rock') {
        if (computerSelection() == 'Rock') {
            return 'tie'
        }
        else if (computerSelection() == 'Scissors') {
            return 'You win!'
        }
        else if (computerSelection() == 'Paper') {
            return 'Computer wins!'
        }
        else {
            return 'ERROR'
        }
    }
    else if (playerSelection() == 'Scissors') {
        if (computerSelection() == 'Scissors') {
            return 'tie'
        }
        else if (computerSelection() == 'Rock') {
            return ' Computer wins!'
        }
        else if (computerSelection() == 'Paper') {
            return 'You win!'
        }
        else {
            return 'ERROR'
        } 
    }
    else if (playerSelection() == 'Paper') {
        if (computerSelection() == 'Paper') {
                return 'tie'
            }
        else if (computerSelection() == 'Scissors') {
                return ' Computer wins!'
            }
        else if (computerSelection() == 'Rock') {
                return 'You win!'
            }
        else {
                return 'ERROR'
            } 
        }
    else {
        return 'ERROR'
    }
    }

