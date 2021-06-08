let turnips = 0
let cucumber = 0
let helpers = 0
let turnCursor = 0
let cucumberCursor = 0

function clickTurnip(num) {
    turnips += num
    document.getElementById("turnip-counter").textContent = turnips
    let turnipFarm = document.getElementById("turnip-farmer")
    if (turnips >= 10){
        let helperCount= document.getElementById("helper-counter")
        helperCount.classList.remove("toggle-content")
        let helperBuy= document.getElementById("hire-helper")
        helperBuy.classList.remove("toggle-content")
        turnipFarm.classList.remove("toggle-content")
    }
    if (turnips >= 20 && helpers >= 1){
        let cucumberCount = document.getElementById("cucumber-counter")
        cucumberCount.classList.remove("toggle-content")
        let cucumberHarvest = document.getElementById("harvest-cucumber")
        cucumberHarvest.classList.remove("toggle-content")
        let cucumberHelper = document.getElementById("cucumber-farmer")
        cucumberHelper.classList.remove("toggle-content")
    }
}

function clickCucumber(num) {
    cucumber += num
    document.getElementById("cucumber-count").textContent = cucumber
    if (cucumber >= 20){
        
    }
}

function buyCursor(){
    let helperCost = Math.floor(10 * Math.pow(2.1, helpers))
    if (turnips >= helperCost) {
        helpers++
        turnips = turnips - helperCost
        document.getElementById("helpers").textContent = helpers
        document.getElementById("turnip-counter").textContent = turnips
    }
    let nextCost = Math.floor(10 * Math.pow(2.1, helpers))
    // document.getElementById("helper-cost").textContent = nextCost
}

function incTurnHelp(num) {
    if (helpers >=1) {
        turnCursor++
        helpers--
    }
    document.getElementById("turnip-helper").textContent = turnCursor
    document.getElementById("helpers").textContent = helpers
}

function decTurnHelp(num) {
    if (turnCursor >=1) {
        turnCursor--
        helpers++
    }
    document.getElementById("turnip-helper").textContent = turnCursor
    document.getElementById("helpers").textContent = helpers
}
function incCucumberHelp(num) {
    if (helpers >=1) {
        cucumberCursor++
        helpers--
    }
    document.getElementById("cucumber-helper").textContent = cucumberCursor
    document.getElementById("helpers").textContent = helpers
}

function decCucumberHelp(num) {
    if (cucumberCursor >=1) {
        cucumberCursor--
        helpers++
    }
    document.getElementById("cucumber-helper").textContent = cucumberCursor
    document.getElementById("helpers").textContent = helpers
}

window.setInterval(() => {
    clickTurnip(turnCursor)
    clickCucumber(cucumberCursor)
}, 1000)