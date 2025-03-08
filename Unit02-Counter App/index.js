// javascript
let saveEl = document.querySelector("#save-el")
let countEl = document.querySelector("#count-el")
let count = 0


function increment() {
    count += 1
    countEl.innerText = count
}


function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}