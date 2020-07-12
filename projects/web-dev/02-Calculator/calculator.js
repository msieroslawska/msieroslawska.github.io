/* eslint-disable no-undef */

const resultElement = document.querySelector('.result');
let tempValue = null;
let wasLastClickOperator = false;

const isDigit = value => !Number.isNaN(Number(value));
const getCurrentValue = () => Number(resultElement.innerHTML);

const handleDigit = (value) => {
  if (wasLastClickOperator) {
    wasLastClickOperator = false;
    resultElement.innerHTML = value;
  } else {
    resultElement.innerHTML = Number(`${getCurrentValue()}${value}`);
  }
};

const handleOperator = (value) => {
  wasLastClickOperator = true;
  switch (value) {
    case '+':
      tempValue += getCurrentValue();
      break;
    case '-':
      tempValue -= getCurrentValue();
      break;
    case 'x':
      tempValue *= getCurrentValue();
      break;
    case '/':
      tempValue /= getCurrentValue();
      break;
    default:
    //
  }
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
      resultElement.innerHTML = tempValue;
      tempValue = null;
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
