


const userOption = {
    "rock": "/resources/assets/icon-rock.svg",
    "paper": "/resources/assets/icon-paper.svg",
    "scissors": "/resources/assets/icon-scissors.svg"
}

let score = 0;

const userChoice = opt => {
    let option = document.querySelector('.play-area')
    option.style.display = 'none'
    let selection = document.querySelector('.selection');
    selection.style.display = "flex";
    document.getElementById("user-picked").src = userOption[opt]
    
    computerChoice(opt)

}


const computerChoice = (opt) => {
    setTimeout(function () {
        let options = ['rock', 'paper', 'scissors']
        let houseChoice = options[Math.floor(Math.random() * options.length)]
        document.querySelector('#house-picked').src = userOption[houseChoice]

        let houseSelection =  document.querySelector(".house-selection .s")
        houseSelection.style.display = "flex";
        houseSelection.style.visibility = "visible";
        houseSelection.style.opacity = 1;   

        decider(opt, houseChoice)
        document.querySelector(".decider").style.display = "flex"
    
    }, 1500)  
    
    
}

const setDecision = decision => {
    document.querySelector(".decider h1").innerText = decision;
}

const setScore = (updateScore) => {
    score = updateScore;
    document.querySelector('.scores').innerText = updateScore

}

const decider = (userPicked, housePicked) => {
    if (userPicked === 'rock' && housePicked === 'paper'){
        setDecision("YOU LOSE")
    }
    if (userPicked === 'scissors' && housePicked === 'paper') {
        setDecision("YOU WIN")
        setScore(score + 1)
    }
    if (userPicked === 'paper' && housePicked === 'paper'){
        setDecision("IT'S A TIE")
    }
    if (userPicked === 'scissors' && housePicked === 'rock'){
        setDecision("YOU LOSE")
    }
    if (userPicked === 'paper' && housePicked === 'rock') {
        setDecision("YOU WIN")
        setScore(score + 1)
    }
    if (userPicked === 'rock' && housePicked === 'rock'){
        setDecision("IT'S A TIE")
        setScore(score)
    }
    if (userPicked === 'paper' && housePicked === 'scissors'){
        setDecision("Y0U LOSE")
    }
    if (userPicked === 'rock' && housePicked === 'scissors') {
        setDecision("YOU WIN")
        setScore(score + 1)
    }
    if (userPicked === 'scissors' && housePicked === 'scissors'){
        setDecision("IT'S A TIE")
    }
    
}

const playAgain = () => {
    let option = document.querySelector('.play-area')
    let selection = document.querySelector('.selection');
    option.style.display = 'flex'
    selection.style.display = "none";
}
/*
let newGame = document.querySelector(".decider")

playAgain.addEventListener('click', ()=>{
    let option = document.querySelector('.play-area')
    option.style.display = 'flex'
    let selection = document.querySelector('.selection');
    selection.style.display = "none";

}) */

document.querySelector("footer").addEventListener('click', () => {
    document.querySelector(".rule-box").style.display = "flex"
    document.querySelector("body").style.opacity = 0.95
    document.querySelector("body").style.backgroundColor = "3B4262"
})

document.querySelector(".close").addEventListener("click", () => {
    document.querySelector(".rule-box").style.display = "none"
})