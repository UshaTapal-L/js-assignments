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
