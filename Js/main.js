setTimeout(() => {
    document.body.classList.remove("preload");
  }, 500)


const userOption = {
    "rock": "/resources/assets/icon-rock.svg",
    "paper": "/resources/assets/icon-paper.svg",
    "scissors": "/resources/assets/icon-scissors.svg"
}

let score = 0;

const userChoice = opt => {
    document.querySelector(".house-selection .s").style.visibility = "hidden"
    let option = document.querySelector('.play-area')
    option.style.display = 'none'
    let selection = document.querySelector('.selection');
    selection.style.display = "flex";

    document.getElementById("user-picked").src = userOption[opt]

    
    if (opt === "scissors") {
        document.querySelector(".user-selection .p").style.border = "20px solid #eb9f0e"
        document.querySelector(".user-selection .p").style.boxShadow = "0 10px #ebbf4f"
        if (screen.width < 800) {
            // document.querySelector(".user-selection .p").style.border = "10px solid #eb9foe #bcf4f"
            document.querySelector(".user-selection .p").style.border = "10px solid #eb9f1e"
            document.querySelector(".user-selection .p").style.boxShadow = "0 5px #ebbf4f"
        }
    }

    if (opt === "rock") {
        document.querySelector(".user-selection .p").style.border = "20px solid #db2e4d"
        document.querySelector(".user-selection .p").style.boxShadow = "0 10px #9d1634"
        if (screen.width < 800) {
            document.querySelector(".user-selection .p").style.border = "10px solid #db2e4d"
            document.querySelector(".user-selection .p").style.boxShadow = "0 5px #9d1634"
        }
    }

    if (opt === "paper") {
        document.querySelector(".user-selection .p").style.border = "20px solid #4664f4"
        document.querySelector(".user-selection .p").style.boxShadow = "0 10px #2a45c2"
    if (screen.width < 800) {
        document.querySelector(".user-selection .p").style.border = "10px solid #4664f4"
        document.querySelector(".user-selection .p").style.boxShadow = "0 5px #2a45c2"
    }
    }
    

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

        if (houseChoice === "rock") {
            document.querySelector(".house-selection .s").style.border = "20px solid #db2e4d"
            document.querySelector(".house-selection .s").style.boxShadow = "0 5px #9d1634"
            if (screen.width < 800) {
                document.querySelector(".house-selection .s").style.border = "10px solid #db2e4d"
                document.querySelector(".house-selection .s").style.boxShadow = "0 5px #9d1634"
            }
        }

        if (houseChoice === "paper") {
            document.querySelector(".house-selection .s").style.border = "20px solid #4664f4"
            document.querySelector(".house-selection .s").style.boxShadow = "0 10px #2a45c2"
        if (screen.width < 800) {
            document.querySelector(".house-selection .s").style.border = "10px solid #4664f4"
            document.querySelector(".house-selection .s").style.boxShadow = "0 5px #2a45c2"
        }
        }

        if (houseChoice === "scissors") {
            document.querySelector(".house-selection .s").style.border = "20px solid #eb9f0e"
            document.querySelector(".house-selection .s").style.boxShadow = "0 10px #ebbf4f"
            if (screen.width < 800) {
                document.querySelector(".house-selection .s").style.border = "10px solid #eb9f0e"
                document.querySelector(".house-selection .s").style.boxShadow = "0 5px #ebbf4f"
            }
        }   

        showDecision()
        
        decider(opt, houseChoice)
    }, 1500)  
    
}


const showDecision = () => {
        document.querySelector(".decider").style.display = "flex";
        document.querySelector(".decider").style.visibility = "visible"
}






// document.querySelector(".decider").style.display = "flex" ;

const setDecision = decision => {
    document.querySelector(".decider h1").innerText = decision;
}


const decider = (userPicked, housePicked) => {
    if (userPicked === 'rock' && housePicked === 'paper'){
        setDecision("YOU LOSE")
    }
    if (userPicked === 'scissors' && housePicked === 'paper') {
        setDecision("YOU WIN")
        setScore(score + 1)
        document.querySelector(".container").boxShadow = "0 0 500px rgba(255, 255, 255, 0.4)"
    }
    if (userPicked === 'paper' && housePicked === 'paper'){
        setDecision("DRAW")
    }
    if (userPicked === 'scissors' && housePicked === 'rock'){
        setDecision("YOU LOSE")
    }
    if (userPicked === 'paper' && housePicked === 'rock') {
        setDecision("YOU WIN")
        setScore(score + 1)
    }
    if (userPicked === 'rock' && housePicked === 'rock'){
        setDecision("DRAW")
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
        setDecision("DRAW")
    }
    
}

const playAgain = () => {
    
    let option = document.querySelector('.play-area')
    option.style.display = 'flex';
    let selection = document.querySelector('.selection');
    selection.style.display = "none";
    // document.querySelector(".decider").style.display = "none" ;
    document.querySelector(".decider").style.visibility = "hidden" ;
} 



const setScore =  (updateScore) => {
    score = updateScore;
    document.querySelector('.scores').innerText = updateScore
}



document.querySelector("footer").addEventListener('click', () => {
    document.querySelector(".rule-box").style.display = "flex"
    document.querySelector("body").style.opacity = 0.95
    document.querySelector("body").style.backgroundColor = "#3B4262"
})

document.querySelector(".close").addEventListener("click", () => {
    document.querySelector(".rule-box").style.display = "none"
})