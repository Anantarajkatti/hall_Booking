// Create the calculator container
const calculatorContainer = document.createElement('div');
calculatorContainer.classList.add('calculator');

// Create the result input field
const resultInput = document.createElement('input');
resultInput.setAttribute('type', 'text');
resultInput.setAttribute('id', 'result');
resultInput.setAttribute('disabled', 'true');

// Create the buttons container
const buttonsContainer = document.createElement('div');
buttonsContainer.classList.add('buttons');

// Button labels
const buttonLabels = ['7', '8', '9', '+', '4', '5', '6', '-', '1', '2', '3', '*', '0', 'C', '=', '/'];

// Create buttons
buttonLabels.forEach(label => {
    const button = document.createElement('button');
    button.textContent = label;
    button.addEventListener('click', () => {
        if (label === 'C') {
            clearResult();
        } else if (label === '=') {
            calculate();
        } else {
            appendCharacter(label);
        }
    });
    buttonsContainer.appendChild(button);
});

// Append elements to the calculator container
calculatorContainer.appendChild(resultInput);
calculatorContainer.appendChild(buttonsContainer);

// Append the calculator container to the body
document.body.appendChild(calculatorContainer);

// Function to append characters to the result input
function appendCharacter(character) {
    resultInput.value += character;
}

// Function to clear the result input
function clearResult() {
    resultInput.value = '';
}

// Function to perform calculation
function calculate() {
    try {
        resultInput.value = eval(resultInput.value);
    } catch (error) {
        resultInput.value = 'Error';
    }
}