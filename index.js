let homePoints = document.getElementById("home-points")
let guestPoints = document.getElementById("guest-points")
let homeCounter = 0
let guestCounter = 0

function addHome1() {
    homeCounter += 1
    homePoints.textContent = homeCounter
}

function addHome2() {
    homeCounter += 2
    homePoints.textContent = homeCounter
}

function addHome3() {
    homeCounter += 3
    homePoints.textContent = homeCounter
}

function addGuest1() {
    guestCounter += 1
    guestPoints.textContent = guestCounter
}

function addGuest2() {
    guestCounter += 2
    guestPoints.textContent = guestCounter    
}

function addGuest3() {
     guestCounter += 3
    guestPoints.textContent = guestCounter   
}

function resetScores() {
    homeCounter = 0
    guestCounter = 0
    homePoints.textContent = homeCounter
    guestPoints.textContent = guestCounter
}
