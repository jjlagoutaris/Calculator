const screen = document.querySelector('#calculator-screen');
let calcArr = [0];
let operator = '';
let dotCount = 0;
let operationCount = 0;

function add(a, b){
    return a + b;
};

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    if(+b !== 0){
        return a / b;
    }
    else{
        alert("Ha!");
    }
}

function operate(operator, a, b){
    switch(operator){
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        default:
            return "ERROR";
    }
}

function performOperation(){
    calcArr.push(screen.textContent);
    screen.textContent = +operate(operator, 
        parseFloat(calcArr[calcArr.length-2]), 
        parseFloat(calcArr[calcArr.length-1])).toFixed(5);
    calcArr.push(screen.textContent);
}

function afterFunctionState(){
    dotCount = 0;
}

function addBtnListeners(){
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(function(e){
        e.addEventListener('click', () => {
            switch(e.textContent){
                default:
                    screen.textContent = "ERROR";
                    break;
                case "0":
                case "1":
                case "2":
                case "3":
                case "4":
                case "5":
                case "6":
                case "7":
                case "8":
                case "9":
                    if(screen.textContent === String(calcArr[calcArr.length-1])){
                        screen.textContent = e.textContent;
                    }
                    else{
                        screen.textContent += e.textContent;
                    }
                    break;
                case ".":
                    if(dotCount === 0 && screen.textContent !== String(calcArr[calcArr.length-1])){
                        screen.textContent += e.textContent;
                    }
                    else if(dotCount === 0 && screen.textContent === String(calcArr[calcArr.length-1])){
                        screen.textContent = e.textContent;
                    }
                    dotCount++;
                    break;
                case "CLEAR":
                    screen.textContent = "";
                    calcArr = [0];
                    break;
                case "DELETE":
                    screen.textContent = screen.textContent.slice(0,-1);
                    break;
                case "+":
                    operationCount++;
                    if (operationCount >= 2){
                        performOperation();
                    }
                    else{
                        calcArr.push(screen.textContent);
                    }
                    operator = '+';
                    afterFunctionState();
                    break;
                case "-":
                    operationCount++;
                    if (operationCount >= 2){
                        performOperation();
                    }
                    else{
                        calcArr.push(screen.textContent);
                    }
                    operator = '-';
                    afterFunctionState();
                    break;
                case "/":
                    operationCount++;
                    if (operationCount >= 2){
                        performOperation();
                    }
                    else{
                        calcArr.push(screen.textContent);
                    }
                    operator = '/';
                    afterFunctionState();
                    break;
                case "*":
                    operationCount++;
                    if (operationCount >= 2){
                        performOperation();
                    }
                    else{
                        calcArr.push(screen.textContent);
                    }
                    operator = '*';
                    afterFunctionState();
                    break;
                case "=":
                    if (operator === '+' || operator === '-' || operator === '*' || operator === '/'){
                        performOperation();
                        operationCount = 0;
                    }
                    else{
                        console.log("Error");
                    }
                    operator = '';
                    afterFunctionState();
                    break;
            }
        });
    });
}

addBtnListeners();