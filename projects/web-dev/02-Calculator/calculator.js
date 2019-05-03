/* eslint-disable no-undef */

const resultElement = document.querySelector('.result');

const isDigit = value => !Number.isNaN(parseInt(value, 10));

const handleDigit = (value) => {
  const currentValue = resultElement.innerHTML;

  resultElement.innerHTML = currentValue.startsWith('0')
    ? value
    : `${currentValue}${value}`;
};

const handleNonDigit = (value) => {
  switch (value) {
    case 'C':
      resultElement.innerHTML = '0';
      break;
    case '<-':
      break;
    case '=':
      break;
    case '+':
      break;
    case '-':
      break;
    case 'x':
      break;
    case '/':
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
