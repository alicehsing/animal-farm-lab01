// import functions and grab DOM elements
const catImage = document.getElementById('cat-image');
const catSound = document.getElementById('cat-sound') 
const lastClicked = document.getElementById('animal-count');

catImage.addEventListener('click', () => {
  catSound.play();
  lastClicked.textContent = 'cat';
});

const dogImage = document.getElementById('dog-image');
const dogSound = document.getElementById('dog-sound') 


dogImage.addEventListener('click', () => {
  dogSound.play();
  lastClicked.textContent = 'dog';
});

const horseImage = document.getElementById('horse-image');
const horseSound = document.getElementById('horse-sound') 


horseImage.addEventListener('click', () => {
  horseSound.play();
  lastClicked.textContent = 'horse';
});

