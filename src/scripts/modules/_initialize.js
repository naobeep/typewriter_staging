const h1 = document.querySelector('h1');
console.log(document.title);
const titleText = h1.textContent === '' ? document.title : h1.textContent;
const txtArr = titleText.split('');
const txtLength = txtArr.length;
// console.log({ h1 }, titleText, txtArr, txtLength);
console.log(h1.innerHTML);

const typeSound = new Audio('sound/02.mp3');
typeSound.volume = 0.3;
const returnSound = new Audio('sound/return.mp3');
console.log({ returnSound });

const screen = document.createElement('div');
screen.classList.add('screen');
const paragraph = document.createElement('p');
paragraph.classList.add('char');
const subtitle = document.createElement('p');
subtitle.classList.add('subtitle');
screen.appendChild(paragraph);

document.body.appendChild(screen);
const { width, height } = screen.getBoundingClientRect();
console.log(width, height);

const fontSize = Math.floor(height * 0.6) + 'px';
paragraph.style.fontSize = fontSize;
subtitle.style.fontSize = height / 5 + 'px';
subtitle.innerHTML = h1.innerHTML;

export  {
  h1,
  typeSound,
  returnSound,
  screen,
  paragraph,
  subtitle,
  txtArr,
};
