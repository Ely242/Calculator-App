// Calculator

const display = document.getElementById('display');
const keys = document.getElementById('keys');
const operatorButtons = document.querySelectorAll('.operator');

function appendToDisplay(value){
    if (display.value === 'Error'){
        clearDisplay();
    }
    const lastChar = display.value.slice(-1);
    const operators = ['+', '-', '*', '/'];

    if (display.value === '' && ['*', '/', ')'].includes(value)){
        return;
    }

    // Check if more than one operator is entered
    if (operators.includes(value) && operators.includes(lastChar)){
        return;
    }
    // Check if more there's already a decimal point
    if (value === '.') {
        const parts = display.value.split(/[\+\-\*\/]/);
        if (parts[parts.length - 1].includes('.')) {
            return;
        }
    }
    // Validate the brackets so they're not unbalanced
    if (value === ')' && !validBrackets(display.value)){
        return;
    }
    // Automatically add multiplication before '('
    if (value === '(' && (/\d$/.test(lastChar) || lastChar === ')')) {
        display.value += '*';
    }

    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function removeFromDisplay() {
    if (display.value === '') {
        return;
    }
    else if (display.value == "Error") {
        display.value = '';
    } 
    else {
        display.value = display.value.slice(0, -1);
    }
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } 
    catch (error) {
        display.value = 'Error';
    }
}

// Returns false if adding a closing bracket makes the expression invalid
function validBrackets(str){
    let balance = -1;
    for (let c of str){
        if (c == '(')
            balance++;
        else if (c == ')' && --balance < 0)
            return false;
    }
    return balance >= 0;
}
