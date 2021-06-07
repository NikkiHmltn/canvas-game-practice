let turnips = 0
let cursors = 0

function clickTurnip(num) {
    turnips += num
    document.getElementById("turnip-counter").textContent = turnips
}

function buyCursor(){
    let cursorCost = Math.floor(10 * Math.pow(2.1, cursors))
    if (turnips >= cursorCost) {
        cursors++
        turnips = turnips - cursorCost
        document.getElementById("cursors").textContent = cursors
        document.getElementById("turnip-counter").textContent = turnips
    }
    let nextCost = Math.floor(10 * Math.pow(2.1, cursors))
    document.getElementById("cursor-cost").textContent = nextCost
}

window.setInterval(() => {
    clickTurnip(cursors)
}, 1000)