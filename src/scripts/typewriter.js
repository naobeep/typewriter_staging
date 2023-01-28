import '../styles/typewriter.scss';
// import { showSingleCharacter } from './modules/_showSingleCharacter';
// import { removeParagraph } from './modules/_removeParagraph';
// import { showSubtitle } from './modules/_showSubtitle';
// import { removeScreen } from './modules/_removeScreen';

// const typewriter = async () => {
//   await showSingleCharacter();
//   await removeParagraph();
//   await showSubtitle();
//   await removeScreen();
// };

// typewriter();

import { Typewriter } from './modules/Typewriter.module';

const settings = {
  delay: 300,
  stand: 3000,
  waitReturnSound: 1500,
};

new Typewriter(settings)

// class Typewriter {
//   constructor({ delay, stand }) {
//     this.h1 = document.querySelector('h1');
//     this.titleText =
//       this.h1.textContent === '' ? document.title : this.h1.textContent;
//     this.textArray = this.titleText.split('');
//     this.sound = {
//       type: new Audio('sound/02.mp3'),
//       return: new Audio('sound/return.mp3'),
//     };
//     this.screen = document.createElement('div');
//     this.paragraph = document.createElement('p');
//     this.subtitle = document.createElement('p');
//   }
//   _init() {
//     this.screen.classList.add('screen');
//     this.paragraph.classList.add('char');
//     this.subtitle.classList.add('subtitle');
//     this.screen.appendChild(this.paragraph);
//     document.body.appendChild(this.screen);
//     const { height } = this.screen.getBoundingClientRect();
//     this.paragraph.style.fontSize = Math.floor(height * 0.6) + 'px';
//     this.subtitle.style.fontSize = Math.floor(height / 5) + 'px';
//     this.subtitle.innerHTML = this.h1.innerHTML;
//   }
// }
