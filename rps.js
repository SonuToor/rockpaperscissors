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

function playMatch(e) {
    e.preventDefault();
    
    userSelection = e.target.value;
    let cpuSelection = options[Math.floor(Math.random()*options.length)];
    displaySelections(cpuSelection, userSelection, e.target);
    
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

    matchCount.innerHTML = `Matches Played: ${matchTally}`;
    userScore.innerHTML = `Your Wins: ${userTally}`;
    cpuScore.innerHTML = `CPU Wins: ${cpuTally}`;
    drawCount.innerHTML = `Draws: ${drawTally}`;
}
