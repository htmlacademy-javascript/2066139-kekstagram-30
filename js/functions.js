// task1
const getIsCompareLengthStr = (str, length) => str.length <= length;

getIsCompareLengthStr('проверяемая строка', 20);
getIsCompareLengthStr('проверяемая строка', 18);
getIsCompareLengthStr('проверяемая строка', 10);

// task2
const getIsPalindrome = (str) => {
  const normalizeStr = str.replaceAll(' ','').toLowerCase();
  let reverseLine = '';

  for (let i = normalizeStr.length - 1; i >= 0; i--) {
    reverseLine += normalizeStr.at(i);
  }

  return normalizeStr === reverseLine;
};

getIsPalindrome('топот');
getIsPalindrome('ДовОд');
getIsPalindrome('Кекс');
getIsPalindrome('Лёша на полке клопа нашёл ');

// task2 - alternative (faster)
const getIsPalindromeAlt = (str) => {
  const normalizedStr = str.replaceAll(' ','').toLowerCase();
  const palindrome = normalizedStr.split('').reverse().join('');

  return normalizedStr === palindrome;
};

getIsPalindromeAlt('Лёша на полке клопа нашёл ');

// task3
const getIntNumber = (value) => {
  const valueStr = value.toString();
  let resultNumber = '';

  for (let i = 0; i < valueStr.length; i++) {
    if (!Number.isNaN(parseInt(valueStr.at(i), 10))) {
      resultNumber += valueStr.at(i);
    }
  }

  return parseInt(resultNumber, 10);
};

getIntNumber('ECMAScript 2022');
getIntNumber('2023 год');
getIntNumber('1 кефир, 0.5 батона');
getIntNumber('агент 007');
getIntNumber('а я томат');
getIntNumber(2023);
getIntNumber(-1);
getIntNumber(1.5);
