/* eslint-disable no-undef */

const result = document.querySelector('.result');

const handleButtonClick = (value) => {
  console.log(value);
  result.innerHTML = value;
};

document.querySelector('.main')
  .addEventListener('click', (event) => { handleButtonClick(event.target.innerHTML); });
