/* Now let's take the input from the user and display them on the screen*/
let topScreen = document.querySelector("#top-screen");
let bottomScreen = document.querySelector("#bottom-screen");

/* as for our calculator, we are going to deal with two number at the same time*/
let topNumber;
let bottomNumber;
let actualSign;
let result;

const btnAc = document.querySelector("#ac");
const btnDel = document.querySelector("#del");

const btnDiv = document.querySelector("#division");
const btnMul = document.querySelector("#multiply");
const btnAdd = document.querySelector("#plus");
const btnSub = document.querySelector("#menos");
const btnEqual= document.querySelector("#equal");

const btnZero = document.querySelector("#zero");
const btnOne = document.querySelector("#one");
const btnTwo = document.querySelector("#two");
const btnThree = document.querySelector("#three");
const btnFour = document.querySelector("#four");
const btnFive = document.querySelector("#five");
const btnSix = document.querySelector("#six");
const btnSeven = document.querySelector("#seven");
const btnEight = document.querySelector("#eight");
const btnNine = document.querySelector("#nine");

const btnPoint = document.querySelector("#point");

const listOfBtn = [];

listOfBtn.push(btnAc);
listOfBtn.push(btnDel);

listOfBtn.push(btnDiv);
listOfBtn.push(btnMul);
listOfBtn.push(btnAdd);
listOfBtn.push(btnSub);
listOfBtn.push(btnEqual);

listOfBtn.push(btnZero);
listOfBtn.push(btnOne);
listOfBtn.push(btnTwo);
listOfBtn.push(btnThree);
listOfBtn.push(btnFour);
listOfBtn.push(btnFive);
listOfBtn.push(btnSix);
listOfBtn.push(btnSeven);
listOfBtn.push(btnEight);
listOfBtn.push(btnNine);

listOfBtn.push(btnPoint);


/* All the functions needed to do the calculation */
const updateScreen = function(number, sign) {
    /* Update our variable */
    result = number
    actualSign = sign;

    topScreen.textContent =  result + " " + actualSign
    bottomScreen.textContent = ""
}

const addition = function(num1, num2) {
    return num1 + num2
}

const subtraction = function(num1, num2) {
    return num1 - num2
}

const division = function(num1, num2) {
    return num1 / num2
}

const multiplication = function(num1, num2) {
    return num1 * num2
}



listOfBtn.map((btn) => {

    if (btn.textContent === "AC") {
        btn.addEventListener("click", () => {
            bottomScreen.textContent = ""
            topScreen.textContent = ""
        })
    }

    else if (btn.textContent === "DEL") {
        btn.addEventListener("click", () => {
            /* delete the last input by the user*/
            let newContent = bottomScreen.textContent.substring(0, bottomScreen.textContent.length-1)
            bottomScreen.textContent = newContent;
        })
    }

    else if (btn.textContent === "+" || btn.textContent === "-" || btn.textContent === "/" || btn.textContent === "*" ) {
        btn.addEventListener("click", () => {
            /* add the number together*/

            if (topScreen.textContent != "") {
                bottomNumber = bottomScreen.textContent;

                /* Before updating the top number, check the sign before the number */
                if (actualSign == "+") {
                    topNumber = addition(parseFloat(topNumber), parseFloat(bottomNumber));
                    updateScreen(topNumber, btn.textContent)
                }
                else if (actualSign == "-") {
                    topNumber = subtraction(parseFloat(topNumber), parseFloat(bottomNumber));
                    updateScreen(topNumber, btn.textContent)
                }
                else if (actualSign == "*") {
                    topNumber = multiplication(parseFloat(topNumber), parseFloat(bottomNumber));
                    updateScreen(topNumber, btn.textContent)
                }
                else if (actualSign == "/") {
                    topNumber = division(parseFloat(topNumber), parseFloat(bottomNumber));
                    updateScreen(topNumber, btn.textContent)
                }
            }

            else {
                topNumber = bottomScreen.textContent;
                updateScreen(topNumber, btn.textContent);
            }
            
        })
    }

    else if (btn.textContent === "=") {
        btn.addEventListener("click", () => {
            topScreen.textContent = ""

            if (actualSign === "+") {
                bottomScreen.textContent = addition(parseFloat(topNumber), parseFloat(bottomScreen.textContent))
            }
            else if (actualSign === "-") {
                bottomScreen.textContent = subtraction(parseFloat(topNumber), parseFloat(bottomScreen.textContent))
            }
            else if (actualSign === "*") {
                bottomScreen.textContent = multiplication(parseFloat(topNumber), parseFloat(bottomScreen.textContent))
            }

            else {
                bottomScreen.textContent = division(parseFloat(topNumber), parseFloat(bottomScreen.textContent))
            }
        })
    }
    
    else {
        btn.addEventListener("click", () => {
            bottomScreen.textContent += btn.textContent;
        })
    }
})




