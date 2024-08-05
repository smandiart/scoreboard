// set variables
let scoreHome = document.getElementById("score-home")
let scoreGuest = document.getElementById("score-guest")
let resultHome = 0
let resultGuest = 0

// set button functions
function homeOne() {
    resultHome = resultHome + 1
    scoreHome.textContent = resultHome
}

function homeTwo() {
    resultHome = resultHome + 2
    scoreHome.textContent = resultHome
}

function homeThree() {
    resultHome = resultHome + 3
    scoreHome.textContent = resultHome
}

function guestOne() {
    resultGuest = resultGuest + 1
    scoreGuest.textContent = resultGuest
}

function guestTwo() {
    resultGuest = resultGuest + 2
    scoreGuest.textContent = resultGuest
}

function guestThree() {
    resultGuest = resultGuest + 3
    scoreGuest.textContent = resultGuest
}

function newGame() {
    scoreHome.textContent = 0
    scoreGuest.textContent = 0
    resultHome = 0
    resultGuest = 0
}
