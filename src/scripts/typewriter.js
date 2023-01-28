import '../styles/typewriter.scss';

const settings = {
  delay: 300,
  stand: 3000
};
const h1 = document.querySelector('h1');
console.log(document.title);
const titleText = h1.textContent === '' ? document.title : h1.textContent;
const txtArr = titleText.split('');
const txtLength = txtArr.length;
console.log({ h1 }, titleText, txtArr, txtLength);
console.log(h1.innerHTML);

const typeSound = new Audio('sound/02.mp3');
typeSound.volume = 0.3;
const returnSound = new Audio('sound/return.mp3');
console.log({returnSound});

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
subtitle.innerHTML = h1.innerHTML;

const showChar = char => {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(char);
      paragraph.textContent = char;
      typeSound.currentTime = 0;
      typeSound.play();
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
  return new Promise(resolve => {
    setTimeout(() => {
      screen.appendChild(subtitle);
      resolve('subtitle');
    }, 1500);
  });
};

const removeScreen = async () => {
  setTimeout(() => {
    document.body.removeChild(screen);
  }, settings.stand);
};

const typewriter = async () => {
  await showSingleCharacter(txtArr);
  await removeParagraph(paragraph);
  await showSubtitle(subtitle);
  await removeScreen();
};

typewriter();
