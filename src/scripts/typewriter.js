import '../styles/typewriter.scss';

const settings = {
  delay: 300,
};
const h1 = document.querySelector('h1');
const titleText = h1.textContent;
const txtArr = titleText.split('');
const txtLength = txtArr.length;
console.log(h1, titleText, txtArr, txtLength);

const typeSound = new Audio('sound/02.mp3');
typeSound.volume = 0.3;
const returnSound = new Audio('sound/return.mp3');

const screen = document.createElement('div');
screen.classList.add('screen');
const paragraph = document.createElement('p');
paragraph.classList.add('char');
const subtitle = document.createElement('p');
subtitle.classList.add('sub-title');
screen.appendChild(paragraph);

document.body.appendChild(screen);
const { width, height } = screen.getBoundingClientRect();
console.log(width, height);

const fontSize = Math.floor(height * 0.6) + 'px';
paragraph.style.fontSize = fontSize;
subtitle.style.fontSize = height / 5 + 'px';
subtitle.textContent = titleText;

const showChar = char => {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(char);
      paragraph.textContent = char;
      typeSound.currentTime = 0;
      // typeSound.play();
      resolve('show char');
    }, settings.delay);
  });
};

const showSingleCharacter = async textArray => {
  for (const char of textArray) {
    await showChar(char);
  }
};

const removeParagraph = async paragraph => {
  return new Promise(resolve => {
    console.log('remove');
    setTimeout(() => {
      screen.removeChild(paragraph);
      returnSound.play();
      resolve('remove');
    }, 300);
  });
};

const showSubtitle = async subtitle => {
  setTimeout(() => {
    screen.appendChild(subtitle);
  },1500);
};

const typewriter = async () => {
  await showSingleCharacter(txtArr);
  await removeParagraph(paragraph);
  await showSubtitle(subtitle);
};

typewriter();
