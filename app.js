// Assignment  1 

function checkNumber(){
    let userInput = prompt('Enter a number: ');

    let number = parseFloat(userInput);

    if (!isNaN(number)) {
        if (number > 0) {
            console.log("Positive");
        } else if (number < 0) {
            console.log("Negative");
        } else {
            console.log("Zero");
        }
    } else {
        console.log("Invalid input. Please enter a valid number.");
    }
}

checkNumber();


// Assignment 2:


function calculateFactorial() {
   
    let userInput = prompt("Enter a positive integer:");


    let n = parseInt(userInput);

    
    if (!isNaN(n) && n > 0) {
        let factorial = 1;
        
        
        for (let i = 1; i <= n; i++) {
            factorial *= i;
        }

        console.log(`Factorial of ${n} is: ${factorial}`);
    } else {
        console.log("Invalid input. Please enter a valid positive integer.");
    }
}


calculateFactorial();


// Assignment 3
function findLargerNumber() {
    let num1 = parseFloat(prompt("Enter the first number:"));
    let num2 = parseFloat(prompt("Enter the second number:"));

    if (!isNaN(num1) && !isNaN(num2)) {
        let largerNumber = num1 > num2 ? num1 : num2;
        console.log(`The larger number is: ${largerNumber}`);
    } else {
        console.log("Invalid input. Please enter valid numbers.");
    }
}

findLargerNumber();



// Assignment 4
function isPalindrome() {
    let str = prompt("Enter a string:");

    let cleanedStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    let reversedStr = cleanedStr.split('').reverse().join('');

    if (cleanedStr === reversedStr) {
        console.log("It's a palindrome!");
    } else {
        console.log("It's not a palindrome.");
    }
}

isPalindrome();



// Assignment 5
function printPrimesUpToN() {
    let n = parseInt(prompt("Enter a positive integer:"));

    if (!isNaN(n) && n > 1) {
        for (let i = 2; i <= n; i++) {
            if (isPrime(i)) {
                console.log(i);
            }
        }
    } else {
        console.log("Invalid input. Please enter a valid positive integer greater than 1.");
    }
}
// Call the function to print prime numbers up to a number
printPrimesUpToN();


// Assignment 6

function simpleCalculator() {
    let num1 = parseFloat(prompt("Enter the first number:"));
    let operator = prompt("Enter the operator (+, -, *, /):");
    let num2 = parseFloat(prompt("Enter the second number:"));

    if (!isNaN(num1) && !isNaN(num2)) {
        switch (operator) {
            case '+':
                console.log(`${num1} + ${num2} = ${num1 + num2}`);
                break;
            case '-':
                console.log(`${num1} - ${num2} = ${num1 - num2}`);
                break;
            case '*':
                console.log(`${num1} * ${num2} = ${num1 * num2}`);
                break;
            case '/':
                if (num2 !== 0) {
                    console.log(`${num1} / ${num2} = ${num1 / num2}`);
                } else {
                    console.log("Cannot divide by zero.");
                }
                break;
            default:
                console.log("Invalid operator. Please enter +, -, *, or /.");
        }
    } else {
        console.log("Invalid input. Please enter valid numbers.");
    }
}


simpleCalculator();



// Assignment 7

function countVowels() {
    let str = prompt("Enter a string:");
    let vowels = str.match(/[aeiou]/gi);

    if (vowels) {
        console.log(`Number of vowels in the string: ${vowels.length}`);
    } else {
        console.log("No vowels found in the string.");
    }
}

countVowels();


// Assignment 8

function isPerfectNumber() {
    let num = parseInt(prompt("Enter a positive integer:"));

    if (!isNaN(num) && num > 0) {
        let sum = 0;
        for (let i = 1; i < num; i++) {
            if (num % i === 0) {
                sum += i;
            }
        }

        if (sum === num) {
            console.log(`${num} is a perfect number.`);
        } else {
            console.log(`${num} is not a perfect number.`);
        }
    } else {
        console.log("Invalid input. Please enter a valid positive integer.");
    }
}


isPerfectNumber();


// Assignment 9

function printFibonacciSeriesUpToN() {
    let n = parseInt(prompt("Enter a positive integer:"));

    if (!isNaN(n) && n > 0) {
        let a = 0, b = 1;

        while (a <= n) {
            console.log(a);
            const temp = a + b;
            a = b;
            b = temp;
        }
    } else {
        console.log("Invalid input. Please enter a valid positive integer.");
    }
}


printFibonacciSeriesUpToN();



// Assignment 10

function printMultiplicationTable() {
    let n = parseInt(prompt("Enter a positive integer:"));

    if (!isNaN(n) && n > 0) {
        for (let i = 1; i <= 10; i++) {
            console.log(`${n} x ${i} = ${n * i}`);
        }
    } else {
        console.log("Invalid input. Please enter a valid positive integer.");
    }
}

printMultiplicationTable();