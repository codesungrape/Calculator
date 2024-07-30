console.log('calculator.js is loaded')



document.addEventListener('DOMContentLoaded', () => {
    
    const buttonZero = document.getElementById('button0');
    const buttonOne = document.getElementById('button1');
    const buttonTwo = document.getElementById('button2');
    const buttonThree = document.getElementById('button3');
    const buttonFour = document.getElementById('button4');
    const buttonFive = document.getElementById('button5');
    const buttonSix = document.getElementById('button6');
    const buttonSeven = document.getElementById('button7');
    const buttonEight = document.getElementById('button8');
    const buttonNine = document.getElementById('button9');

    const buttonClear = document.getElementById('button-clear');
    const buttonEquals = document.getElementById('button-equals');

    const buttonAdd = document.getElementById('button-addition');
    const buttonSubtract = document.getElementById('button-minus');
    const buttonMultiply = document.getElementById('button-multiply');
    const buttonDivide = document.getElementById('button-divide');
    const buttonModulo = document.getElementById('button-modulo');
    const buttonPi = document.getElementById('button-pi');
    const buttonSqrt = document.getElementById('button-sqrt');

    let result = document.getElementById('result-output');

    let currentValue = '';
    let previousValue = '';
    let operator = '';


    buttonZero.onclick = () => appendNumber('0');
    buttonOne.onclick = () => appendNumber('1');
    buttonTwo.onclick = () => appendNumber('2');
    buttonThree.onlick = () => appendNumber('3');
    buttonFour.onclick = () => appendNumber('4');
    buttonFive.onclick = () => appendNumber('5');
    buttonSix.onclick = () => appendNumber('6');
    buttonSeven.onclick = () => appendNumber('7');
    buttonEight.onlcik = () => appendNumber('8');
    buttonNine.onclick = () => appendNumber('9')

    buttonClear.onclick = clear;
    buttonEquals.onclick = calculate;

    buttonAdd.onclick = () => setOperator('+');
    buttonSubtract.onclick = () => setOperator('-');
    buttonMultiply.onclick = () => setOperator('*');
    buttonDivide.onclick = () => setOperator('/');

    buttonPi.onclick = () => appendNumber(Math.PI);
    buttonSqrt.onclick = () => calculateSqrt();

    function appendNumber(number){
        currentValue += number;
        updateDisplay();
    }

    function clear(){
        currentValue = '';
        previousValue = '';
        operator = ''
        updateDisplay();
    }

    function setOperator(op){
        if (currentValue === '') return;
        if (previousValue !== '') calculate();
        operator = op;
        previousValue = currentValue;
        currentValue = '';
    }

    function calculate(){
        if (currentValue === '' || previousValue === '') return;

        let resultValue;
        const previous = parseFloat(previousValue);
        const current = parseFloat(currentValue);

        switch(operator){
            case '+':
                resultValue = previous + current;
                break;
            case '-':
                resultValue = previous - current;
                break;
            case '*':
                resultValue = previous * current;
                break;
            case '/':
                resultValue = previous / current;
                break;
            case '%':
                resultValue = previous % current;
                break;
            default:
                return;
        }

        currentValue = resultValue.toString();
        operator = '';
        previousValue = '';
        updateDisplay();
    }

    function calculateSqrt(){
        if (currentValue === '') return;
        currentValue = Math.sqrt(parseFloat(currentValue)).toString();
        updateDisplay()
    }

    function updateDisplay(){
        result.value = currentValue;
    }
})





