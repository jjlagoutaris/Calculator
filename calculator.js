const screen = document.querySelector('#calculator-screen'); 

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
    return a / b;
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
                    break;
                case "DELETE":
                    screen.textContent = screen.textContent.slice(0,-1);
                    break;       
            }
        });
    });
}

addBtnListeners();