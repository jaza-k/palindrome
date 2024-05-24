import inquirer from 'inquirer';

function isPalindrome() {

    const question = [
        {
            name: 'text',
            type: 'input',
            message: "Type in a word to check if it is a palindrome!",
        }
    ]

    inquirer.prompt(question).then((input) => {
        // remove non alphanumeric characters and convert to lowercase
        var cleanedInput = input.text.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

        console.log(input)
        
        // check if cleaned input is same forward and backward
        var reversedInput = cleanedInput.split('').reverse().join('');

        if (cleanedInput === reversedInput) {
            console.log("is pal");
        } else {
            console.log("is not pal");
        }
    }).catch((error) => {
            console.log(error);
    });
}

isPalindrome();        

/**
* Move it to a script, to use npm run start
* Use a reputable NPM library to pull down a text input
* The script should start with asking for an input: what is the phrase?
```
 */
