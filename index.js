let homeCount = 0;
let guestCount = 0;

let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");
let announcement = document.getElementById("announcement");

let homeScoreboard = document.querySelector(".score-content:first-child .scoreboard");
let guestScoreboard = document.querySelector(".score-content:last-child .scoreboard");


function addPoints(team, points) {
    if (team === "home") {
        homeCount += points;
        homeScore.textContent = homeCount;
    }
    
    else {
        guestCount += points;
        guestScore.textContent = guestCount;
    }
}

function clearScore() {
    homeCount = 0;
    guestCount = 0;
    homeScore.textContent = 0;
    guestScore.textContent = 0;
    announcement.textContent = "";
    homeScoreboard.classList.remove("winning-score");
    guestScoreboard.classList.remove("winning-score");
    
}

function gameOver() {
    if (homeCount > guestCount) {
        announcement.textContent = "Home was the winner!"
        homeScoreboard.classList.add("winning-score");
        
    }
    else if (guestCount > homeCount) {
        announcement.textContent = "Guest was the winner!"
        guestScoreboard.classList.add("winning-score");
    }
    else {
        announcement.textContent = "It was a draw!"
    }
}
