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