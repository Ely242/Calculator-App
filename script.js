// Calculator

const display = document.getElementById('display');
const keys = document.getElementById('keys');
const operatorButtons = document.querySelectorAll('.operator');

function appendToDisplay(value){
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