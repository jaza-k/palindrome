function isPalindrome(input) {
    // remove non alphanumeric characters and convert to lowercase
    var cleanedInput = input.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
   
    // check if cleaned input is same forward and backward
    var reversedInput = cleanedInput.split('').reverse().join('');
   
    if (cleanedInput === reversedInput) {
        console.log("is pal");
    } else {
        console.log("is not pal");
    }
}

isPalindrome("Racecar");        