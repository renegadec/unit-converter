/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
// DOM Elements


const convertBtn = document.getElementById("convert-button")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

convertBtn.addEventListener("click", function() {
    convert()
})

// function for length coversion
function convert() {
    let userInput = document.getElementById("user-input").value
    
    lengthEl.innerHTML +=  `
                                <p>
                                    ${userInput} meters = ${(Number(userInput) * 3.281).toFixed(3)} feet | ${userInput} feet = ${(Number(userInput) / 3.281).toFixed(3)} meters
                                </p>
                            `

    volumeEl.innerHTML +=   `
                                <p>
                                    ${userInput} litres = ${(Number(userInput) * 0.264).toFixed(3)} gallons | ${userInput} gallons = ${(Number(userInput) / 0.264).toFixed(3)} litres
                                </p>
                            `

    massEl.innerHTML +=     `
                                <p>
                                    ${userInput} kilos = ${(Number(userInput) * 2.204).toFixed(3)} pounds | ${userInput} pounds = ${(Number(userInput) / 2.204).toFixed(3)} kilos
                                </p>
                            `

    
}


