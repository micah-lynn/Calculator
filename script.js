let displayValElement = document.querySelector('.display-number');

let displayVal = '0'
let pendingVal;
let evalStringArray = [];

const numBtns = document.getElementsByClassName('number');
const operatorBtns = document.getElementsByClassName('op-btn-element');
const clearBtn = document.querySelector('.clr-btn');
const backspaceBtn = document.querySelector('.backspace');
const decimalBtn = document.querySelector('.decimal');

let performOperation = (clickObj) => {
    let operator = clickObj.target.firstChild.textContent;
    
    switch (operator) {
        case '+':
            pendingVal = displayVal;
            displayVal = '0';
            displayValElement.innerText = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('+');
            break;
    
        case '-':
            pendingVal = displayVal;
            displayVal = '0';
            displayValElement.innerText = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('-');
            break;
        
        case 'x':
            pendingVal = displayVal;
            displayVal = '0';
            displayValElement.innerText = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('*');
            break;

        case '÷':
            pendingVal = displayVal;
            displayVal = '0';
            displayValElement.innerText = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('/');
            break;

        case '=':
            evalStringArray.push(displayVal);
            let evaluation = eval(evalStringArray.join(' '));
            displayVal = evaluation + '';
            displayValElement.innerText = displayVal;
            evalStringArray = [];
            break;
        default:
            break;
    }
}

for (let i = 0; i < numBtns.length; i++) {
    numBtns[i].addEventListener('click', function() {
        let btnText = numBtns[i].innerText;
        
        if (displayVal === '0') {
            displayVal = '';
        }

        displayVal += btnText;
        displayValElement.innerText = displayVal
    });
}

for (let i = 0; i < operatorBtns.length; i++) {
    operatorBtns[i].addEventListener('click', performOperation, false);
}

clearBtn.onclick = () => {
    displayVal = '0';
    pendingVal = undefined;
    evalStringArray = [];
    displayValElement.innerHTML = displayVal;
}

backspaceBtn.onclick = () => {
    let lengthOfDisplayVal = displayVal.length;
    displayVal = displayVal.slice(0, lengthOfDisplayVal - 1);

    if (displayVal === ''||displayVal === '-')
        displayVal = '0';

    displayValElement.innerHTML = displayVal;
}

decimalBtn.onclick = () => {
    if (!displayVal.includes('.')) {
        displayVal += '.';
    }
    displayValElement.innerHTML = displayVal;
}