var currentColor = "#ffffff"
var isPainting = false

document.addEventListener('DOMContentLoaded', function () {
    let table = document.getElementById("canvas")
    for (var i = 0; i < 32; i++) {
        let row = document.createElement("tr")
        for (var j = 0; j < 64; j++) {
            let cell = document.createElement("td")
            row.appendChild(cell)
        }
        table.appendChild(row)
    }
    table.onmousedown = function(event) {StartPainting(event)}
    table.onmousemove = function(event) {SetColor(event)}
    document.onmouseup = function() {EndPainting()}

    table = document.getElementById("pallete").onclick = function(event) {ChooseColor(event)}

    document.getElementById("reset-button").onclick = function() {Reset()}
    document.getElementById("color-picker").onchange = function() {ColorPicked()}
    document.getElementById("save-button").onclick = function() {Save()}
})

function StartPainting(event) {
    if (event.target.id !== "canvas") {
        event.target.style.backgroundColor = currentColor
    }
    isPainting = true
}

function SetColor(event) {
    if (isPainting && event.target.id !== "canvas") {
        event.target.style.backgroundColor = currentColor
    }
}

function EndPainting() {
    isPainting = false
}

function ChooseColor(event) {
    if (event.target.classList.contains("color")) {
        currentColor = window.getComputedStyle(event.target).backgroundColor
        let colorDisplay = document.getElementById("color-display")
        colorDisplay.style.backgroundColor = currentColor
    }
}

function Reset() {
    let table = document.getElementById("canvas")
    for (const row of table.children) {
        for (const td of row.children) {
            td.style.backgroundColor = "#ffffff"
        }
    }
}

function ColorPicked() {
    let picker = document.getElementById("color-picker")
    currentColor = picker.value
    let colorDisplay = document.getElementById("color-display")
    colorDisplay.style.backgroundColor = currentColor
}

function Save() {

}