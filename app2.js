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
