const counterBtn = document.querySelector("#counterBtn")
const resetBtn = document.querySelector("#resetBtn")
const noOfPassengersContainer = document.querySelector("#noOfPassengersContainer")
let noOfPassengers = 0

counterBtn.onclick = () => {
    noOfPassengers++
    noOfPassengersContainer.textContent = noOfPassengers
}

resetBtn.onclick = () => {
    noOfPassengers = 0
    noOfPassengersContainer.textContent = noOfPassengers
}