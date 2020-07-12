const DOGGOS_URL = 'https://dog.ceo/api/breeds/image/random';
const BREEDS_URL = 'https://dog.ceo/api/breeds/list/all';

const createImgElement = ({ alt, classList, src }) => {
  const doggos = document.querySelector('.doggos');
  const img = document.createElement('img');
  img.src = src;
  img.alt = alt;
  img.classList = classList;
  doggos.appendChild(img);
};

const showLoader = () => {
  createImgElement({
    alt: 'loading',
    classList: ['loader'],
    src: './loader.gif',
  });
};

const removeLoader = () => {
  const loader = document.querySelector('.loader');
  if (loader.parentNode) {
    loader.parentNode.removeChild(loader);
  }
};

const getRandomIdx = arraySize => Math.floor(Math.random() * arraySize);

const fetchDoggos = (apiUrl) => {
  fetch(apiUrl)
    .then((response) => {
      showLoader();
      return response;
    })
    .then(response => response.json())
    .then((processedResponse) => {
      const url = Array.isArray(processedResponse.message)
        ? processedResponse.message[getRandomIdx(processedResponse.message.length)]
        : processedResponse.message;
      removeLoader();
      createImgElement({
        alt: 'Cute doggo',
        classList: ['doggo'],
        src: url,
      });
    });
};

const fillSelect = () => {
  fetch(BREEDS_URL)
    .then(response => response.json())
    .then((processedResponse) => {
      const allBreeds = processedResponse.message;
      const select = document.querySelector('.select-breed');

      Object.keys(allBreeds).forEach((breed) => {
        const option = document.createElement('option');
        option.text = breed;
        select.add(option);
      });
    });
};

const addNewRandomDoggo = () => {
  fetchDoggos(DOGGOS_URL);
};

const removeAllDoggos = () => {
  const doggos = document.querySelector('.doggos');
  doggos.innerHTML = '';
};

const addNewDoggoByBreed = () => {
  const currentSelection = document.querySelector('.select-breed').value;
  fetchDoggos(`https://dog.ceo/api/breed/${currentSelection}/images`);
};

fillSelect();

document.querySelector('.add-random-doggo')
  .addEventListener('click', addNewRandomDoggo);

document.querySelector('.add-breed-doggo')
  .addEventListener('click', addNewDoggoByBreed);

document.querySelector('.remove-doggo')
  .addEventListener('click', removeAllDoggos);
