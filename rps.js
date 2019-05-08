const options = ['Rock', 'Paper', 'Scissors'];
let userTally = 0;
let cpuTally = 0; 
let drawTally = 0;
let matchTally = 0; 

const userSelecDisplay = document.querySelector('.user-selection')
const cpuSelecDisplay = document.querySelector('.cpu-selection')


const matchCount = document.querySelector(".matches-played");
const drawCount = document.querySelector(".draws");
const userScore = document.querySelector(".user-score");
const cpuScore = document.querySelector(".cpu-score");

const userOptions = document.querySelectorAll(".option");
userOptions.forEach(option => option.addEventListener('click', playMatch));
userOptions.forEach(option => option.addEventListener('transitionend', removeClass));
document.addEventListener("keyup", playMatch);


function playMatch(e) {
    e.preventDefault();

    let userSelection; 
    let option; 

    if (e.type == "click") {
        userSelection = e.target.value;
        option = e.target; 
    }

    if (e.type == "keyup") {
        if (e.key == "r") {
            userSelection = 'Rock'
            option = document.querySelectorAll(`input[value=${userSelection}]`)[0];
        }
        if (e.key == "p") {
            userSelection = "Paper"
            option = document.querySelectorAll(`input[value=${userSelection}]`)[0];
        }
        if (e.key == "s") {
            userSelection = "Scissors"
            option = document.querySelectorAll(`input[value=${userSelection}]`)[0];
         }
    }

    let cpuSelection = options[Math.floor(Math.random()*options.length)];
    displaySelections(cpuSelection, userSelection, option);
    
    matchTally ++;

    if (userSelection == cpuSelection) {
        drawTally ++;
    }
    else if (userSelection == 'Paper' && cpuSelection == 'Rock'){
        userTally ++;
    }
    else if (userSelection == 'Rock' && cpuSelection == 'Scissors'){
        userTally ++;
    }
    else if (userSelection == 'Scissors' && cpuSelection == 'Paper'){
        userTally ++;
    }
    else {
        cpuTally ++;
    }

    updateScores();
}

function displaySelections(cpu, user, option) {
    
    option.classList.add('selected');

    cpuSelecDisplay.innerHTML = `CPU Chose: ${cpu}`
    userSelecDisplay.innerHTML = `You Chose: ${user}`
}

function removeClass(e) {

    if (e.propertyName !== 'transform') return;
    this.classList.remove('selected');
}

function updateScores() {

    matchCount.nextElementSibling.innerHTML = `${matchTally}`;
    userScore.nextElementSibling.innerHTML = `${userTally}`;
    cpuScore.nextElementSibling.innerHTML = `${cpuTally}`;
    drawCount.nextElementSibling.innerHTML = `${drawTally}`;
}

