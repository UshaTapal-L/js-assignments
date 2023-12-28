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