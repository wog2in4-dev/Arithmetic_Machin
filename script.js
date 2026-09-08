// DOM Selectors
const display = document.querySelector('.display');
const buttonsDiv = document.querySelector('.buttons');

// Add ONE Event Listener to the entire div.
// This uses 'Event Delegation' - a professional, smooth execution technique.
buttonsDiv.addEventListener('click', (event) => {
    // Only proceed if a BUTTON was clicked, not the gaps between buttons.
    if (event.target.tagName !== 'BUTTON') {
        return;
    }

    const clickedButton = event.target;
    const buttonValue = clickedButton.innerText;

    // Handle different button types
    if (buttonValue === 'C') {
        // Clear everything
        display.value = '';
    } else if (buttonValue === '=') {
        // Calculate the result.
        // The 'try...catch' is vital to prevent app crashes on nonsensical input.
        try {
            // eval() parses a string as code (e.g., '5+3' -> 8).
            display.value = eval(display.value);
        } catch (error) {
            display.value = 'Error';
            // Use console.log to show students why it broke during testing.
            console.log("Calculations aren't working/screen is empty: ", error);
        }
    } else {
        // Append all other button values (digits, operators) to the display
        display.value += buttonValue;
    }
});