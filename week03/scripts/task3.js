/* Lesson 3 */

/* FUNCTIONS */

// Step 1: Using function declaration, define a function named add that takes two arguments, number1 and number2
// Step 2: In the function, return the sum of the parameters number1 and number2
// Step 3: Step 3: Using function declaration, define another function named addNumbers 
// that gets the values of two HTML form controls with IDs of addend1 and addend2. Pass them to the add function
// Step 4: Assign the return value to an HTML form element with an ID of sum
// Step 5: Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function

function add(number1, number2) {
    return number1 + number2
}

function addNumbers(){
    let value1 = document.getElementById("addend1").value;
    let value2 = document.getElementById("addend2").value;

    sumNumber = add(parseInt(value1),parseInt(value2));

    let addValue = document.getElementById("sum");
    addValue.value = sumNumber; 
}
const addBtn = document.getElementById("addNumbers");

addBtn.addEventListener("click", addNumbers)


// Step 6: Using function expressions, repeat Steps 1-5 with new functions named subtract and subtractNumbers and HTML form controls with IDs of minuend, subtrahend, difference and subtractNumbers
let subtract = function(number1, number2) {
    return number1 - number2
}

let subtractNumbers = function(){
    let value1 = document.getElementById("minuend").value;
    let value2 = document.getElementById("subtrahend").value;

    subtractNumber = subtract(parseInt(value1),parseInt(value2));

    let subtractValue = document.getElementById("difference");
    subtractValue.value = subtractNumber; 
}
const subtractBtn = document.getElementById("subtractNumbers");

subtractBtn.addEventListener("click", subtractNumbers)


// Step 7: Using arrow functions, repeat Steps 1-5 with new functions named multiply and mulitplyNumbers and HTML form controls with IDs of factor1, factor2, product and multiplyNumbers
let multiply = (number1, number2) => {
    return number1 * number2
}

let mulitplyNumbers = () => {
    let value1 = document.getElementById("factor1").value;
    let value2 = document.getElementById("factor2").value;

    multiplyNumber = multiply(parseInt(value1),parseInt(value2));

    let multiplyValue = document.getElementById("product");
    multiplyValue.value = multiplyNumber;  
}

const multiplyBtn = document.getElementById("multiplyNumbers");

multiplyBtn.addEventListener("click", mulitplyNumbers)


// Step 8: Using any of the three function declaration types, repeat Steps 1-5 with new functions named divide and divideNumbers and HTML form controls with IDs of dividend, divisor, quotient and divideNumbers
let divide = (number1, number2) => {
    return number1 / number2
}

let divideNumbers = () => {
    let value1 = document.getElementById("dividend").value;
    let value2 = document.getElementById("divisor").value;

    let divideValue = document.getElementById("quotient");
    divideValue.value = divide(parseInt(value1), parseInt(value2)); 
}

const divideBtn = document.getElementById("divideNumbers");
divideBtn.addEventListener("click", divideNumbers);

// Step 9: Test all of the mathematical functionality of the task3.html page.



/* BUILT-IN METHODS */

// Step 1: Declare and instantiate a variable of type Date to hold the current date
const currentDate = new Date()

// Step 2: Declare a variable to hold the current year
// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() 
// method/function and assign it to the variable declared in Step 2
const currentYear = currentDate.getFullYear();

// Step 4: Assign the current year variable to an HTML form element with an ID of year
let yearElt = document.querySelector("#year");
yearElt.textContent = currentYear;



/* ARRAY METHODS */

// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25
const myNumbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];

// Step 2: Assign the value of the array variable to the HTML element with an ID of "array"
document.querySelector("#array").textContent = myNumbers;

// Step 3: Use the filter array method to find all of the odd numbers of the array variable and assign the reult to the HTML element with an ID of "odds" ( hint: % (modulus operartor) )
document.querySelector("#odds").textContent = myNumbers.filter(number => number % 2);

// Step 4: Use the filter array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of "evens"
document.querySelector("#evens").textContent = myNumbers.filter(number => number * 2);

// Step 5: Use the reduce array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"
document.querySelector('#sumOfArray').textContent = myNumbers.reduce((sum, number) => sum + number, 0);

// Step 6: Use the map array method to multiple each element in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"
document.querySelector('#multiplied').textContent = myNumbers.map(number => number * 2);

// Step 7: Use the map and reduce array methods to sum the array elements after multiplying each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"
document.querySelector('#sumOfMultiplied').textContent = myNumbers.map(number => number * 2).reduce((sum, number) => sum + number, 0);
