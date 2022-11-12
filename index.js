let element = document.getElementById("counter")
let saveEl = document.getElementById("save-el")
let count = 0

function increment(){
    count = count + 1
    element.innerText = count
}

function save(){
    let value = count + " - "
    saveEl.textContent += value
    element.innerText = 0
    count = 0
}