type TypeReverseWord = (word: string) => string;

type TypeCheckWordsForPalindrome = (words: string[]) => string[];

type TypeGetUniqueValue = (values: number[]) => number[];

type TypeGetNumbersFromFibonacciSequence = (numbersFromSequence: number[]) => number[];

//helpers functions
const reverseWord: TypeReverseWord = (word) => word.toLowerCase().split('').reverse().join('');

//***************** first task
const checkWordsForPalindrome: TypeCheckWordsForPalindrome = (words) =>
  words.filter((word) => {
    return reverseWord(word) === word;
  });

const checkWordsForPalindromeCorrected = (words: Array<string>): Array<string> => words.filter((word: string) => reverseWord(word) === word);

//***************** second task
const getUniqueValue: TypeGetUniqueValue = (values) => [...new Set(values)];

//***************** third task
const getNumbersFromFibonacciSequence: TypeGetNumbersFromFibonacciSequence = (numbersFromSequence) => {
  const fibonacciSequence: number[] = [];

  for (let number of numbersFromSequence) {
    if (number === 0) {
      fibonacciSequence.push(0);
    } else if (number === 1 || number === 2) {
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
