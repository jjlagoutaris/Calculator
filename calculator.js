const screen = document.querySelector('#calculator-screen');
let calculatorCache = [0];
let operator;

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
                case ".":
                    screen.textContent += e.textContent;
                    break;
                case "CLEAR":
                    screen.textContent = "";
                    calculatorCache = [0];
                    break;
                case "DELETE":
                    screen.textContent = screen.textContent.slice(0,-1);
                    break;
                case "+":
                    calculatorCache.push(+screen.textContent);
                    screen.textContent = "";
                    operator = '+';
                    break;
                case "-":
                    calculatorCache.push(+screen.textContent);
                    screen.textContent = "";
                    operator = '-';
                    break;
                case "/":
                    calculatorCache.push(+screen.textContent);
                    screen.textContent = "";
                    operator = '/';
                    break;
                case "*":
                    calculatorCache.push(+screen.textContent);
                    screen.textContent = "";
                    operator = '*';
                    break;
                case "=":
                    if (operator === '+' || operator === '-' || operator === '*' || operator === '/'){
                        screen.textContent = +operate(operator, 
                            calculatorCache[calculatorCache.length-1], 
                            +screen.textContent).toFixed(5);
                        operator = '';
                    }
                    else{
                        screen.textContent = "Error, invalid operation";
                    }
                    break;
            }
        });
    });
}

addBtnListeners();