// task1
const IsStrLengthValid = (str, length) => length >= str.length;

IsStrLengthValid('проверяемая строка', 20);
IsStrLengthValid('проверяемая строка', 18);
IsStrLengthValid('проверяемая строка', 10);

// task2
const isPalindrome = (str) => {
  const normalizedStr = str.replaceAll(' ','').toLowerCase();
  let reverseLine = '';

  for (let i = normalizedStr.length - 1; i >= 0; i--) {
    reverseLine += normalizedStr.at(i);
  }

  return normalizedStr === reverseLine;
};

isPalindrome('топот');
isPalindrome('ДовОд');
isPalindrome('Кекс');
isPalindrome('Лёша на полке клопа нашёл ');

// task2 - alternative (faster)
const IsPalindromeAlt = (str) => {
  const normalizedString = str.replaceAll(' ','').toLowerCase();

  return normalizedString === normalizedString.split('').reverse().join('');
};

IsPalindromeAlt('Лёша на полке клопа нашёл ');

// task3
const getNumber = (value) => {
  const valueStr = value.toString();
  let resultNumber = '';

  for (let i = 0; i < valueStr.length; i++) {
    if (!Number.isNaN(parseInt(valueStr.at(i), 10))) {
      resultNumber += valueStr.at(i);
    }
  }

  return parseInt(resultNumber, 10);
};

getNumber('ECMAScript 2022');
getNumber('2023 год');
getNumber('1 кефир, 0.5 батона');
getNumber('агент 007');
getNumber('а я томат');
getNumber(2023);
getNumber(-1);
getNumber(1.5);
