/*
 * Metric Unit Converter
 * 
 * Conversion factors:
 * 1 meter = 3.281 feet
 * 1 liter = 0.264 gallon  
 * 1 kilogram = 2.204 pound
 */


// Conversion constants for better maintainability
const METERS_TO_FEET = 3.281
const LITERS_TO_GALLONS = 0.264
const KILOS_TO_POUNDS = 2.204

// DOM Elements - cache references for better performance
const convertBtn = document.getElementById("convert-button")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

/**
 * Validates user input to ensure it's a valid positive number
 * @param {string} value - The input value to validate
 * @returns {boolean} - True if valid, false otherwise
 */
function isValidNumber(value) {
    // Check for empty input, NaN, or negative numbers
    if (value == "" || value == NaN || value < 0) {
        alert("Please enter valid number")
        return false
    }
    return true
}

// Event listener for the convert button
convertBtn.addEventListener("click", function() {
    clearResults()        // Clear previous results first
    performConversions()  // Perform new conversions
})

/**
 * Performs all unit conversions and displays results
 * Handles length, volume, and mass conversions
 */
function performConversions() {
    // Get user input from the input field
    let userInput = document.getElementById("user-input").value
    
    // Validate input before processing
    if(!isValidNumber(userInput)) {
        return  // Exit early if validation fails
    }

    // Calculate all conversions with 3 decimal places precision
    let convertedFeet = (Number(userInput) * METERS_TO_FEET).toFixed(3)
    let convertedMeters = (Number(userInput) / METERS_TO_FEET).toFixed(3)
    let convertedGallons = (Number(userInput) * LITERS_TO_GALLONS).toFixed(3)
    let convertedLitres = (Number(userInput) / LITERS_TO_GALLONS).toFixed(3)
    let convertedPounds = (Number(userInput) * KILOS_TO_POUNDS).toFixed(3)
    let convertedKilos = (Number(userInput) / KILOS_TO_POUNDS).toFixed(3)

    // Display length conversions (meters ↔ feet)
    lengthEl.innerHTML += `
        <p>
            ${userInput} meters = ${convertedFeet} feet | ${userInput} feet = ${convertedMeters} meters
        </p>
    `

    // Display volume conversions (liters ↔ gallons)
    volumeEl.innerHTML += `
        <p>
            ${userInput} litres = ${convertedGallons} gallons | ${userInput} gallons = ${convertedLitres} litres
        </p>
    `

    // Display mass conversions (kilograms ↔ pounds)
    massEl.innerHTML += `
        <p>
            ${userInput} kilos = ${convertedPounds} pounds | ${userInput} pounds = ${convertedKilos} kilos
        </p>
    `
}


/**
 * Clears all conversion results while preserving section headers
 * Resets each section back to its original state
 */
function clearResults() {
    // Reset to original state with just headers
    lengthEl.innerHTML = '<h5>Length (Meter/Feet)</h5>'
    volumeEl.innerHTML = '<h5>Volume (Liters/Gallons)</h5>'
    massEl.innerHTML = '<h5>Mass (Kilograms/Pounds)</h5>'
}


