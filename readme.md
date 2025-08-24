# Metric Unit Converter

A simple web application that converts between metric and imperial units. The converter handles common conversions for length, volume, and mass measurements.

## Features

- Real-time conversion between:
  - Meters ↔ Feet
  - Liters ↔ Gallons  
  - Kilograms ↔ Pounds
- Input validation to ensure valid positive numbers
- Clean, responsive interface
- Results displayed to 3 decimal places precision

## Usage

1. Enter a positive number in the input field
2. Click the "Convert" button
3. View the conversions displayed in three sections:
   - Length conversions
   - Volume conversions  
   - Mass conversions

## Technical Details

The application uses the following conversion factors:
- 1 meter = 3.281 feet
- 1 liter = 0.264 gallon
- 1 kilogram = 2.204 pounds

Built with:
- HTML
- CSS 
- JavaScript
- Inter font family from Google Fonts

## Code Structure

- `index.html` - Main HTML structure and layout
- `assets/index.js` - JavaScript logic for:
  - Input validation
  - Conversion calculations
  - DOM manipulation
  - Event handling
- `assets/index.css` - Styling and responsive design

## Error Handling

The application includes input validation to:
- Prevent empty submissions
- Validate for numeric input
- Check for negative numbers

Invalid inputs trigger an alert message prompting the user to enter a valid number.
