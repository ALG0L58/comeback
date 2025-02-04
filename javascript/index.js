"use strict";
//helpers functions
const reverseWord = word => word
    .toLowerCase()
    .split('')
    .reverse()
    .join('');
//***************** first task
const checkWordsForPalindrome = words => words.filter(word => {
    return reverseWord(word) === word;
});
//***************** second task
const getUniqueValue = values => [...new Set(values)];
//***************** third task
const getNumbersFromFibonacciSequence = numbersFromSequence => {
    const fibonacciSequence = [];
    for (let number of numbersFromSequence) {
        if (number === 0) {
            fibonacciSequence.push(0);
        }
        else if (number === 1 || number === 2) {
            fibonacciSequence.push(1);
            continue;
        }
        let f0 = 1;
        let f1 = 1;
        for (let i = 3; i <= number; i++) {
            let f2 = f0 + f1;
            f0 = f1;
            f1 = f2;
            if (i === number) {
                fibonacciSequence.push(f2);
            }
        }
    }
    return fibonacciSequence;
};
const nimber = ['abv', 'aba', 'bab'];
console.log(checkWordsForPalindrome(nimber));
