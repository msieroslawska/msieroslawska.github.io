/* eslint-disable no-undef */

const resultElement = document.querySelector('.result');
let prevValue;
let prevOperator;

const isDigit = value => !Number.isNaN(parseInt(value, 10));

const handleDigit = (value) => {
  const currentValue = resultElement.innerHTML;

  resultElement.innerHTML = currentValue.startsWith('0')
    ? value
    : `${currentValue}${value}`;
};

const handleOperator = (value) => {
  prevValue = resultElement.innerHTML;
  prevOperator = value;
};

const handleNonDigit = (value) => {
  switch (value) {
    case 'C':
      resultElement.innerHTML = '0';
      prevValue = null;
      prevOperator = null;
      break;
    case '<-':
      break;
    case '=':
      break;
    case '+':
    case '-':
    case 'x':
    case '/':
      handleOperator(value);
      break;
    default:
    //
  }
};

const handleButtonClick = (value) => {
  if (isDigit(value)) {
    handleDigit(value);
  } else {
    handleNonDigit(value);
  }
};

document.querySelector('.main')
  .addEventListener('click', (event) => { handleButtonClick(event.target.innerHTML); });
