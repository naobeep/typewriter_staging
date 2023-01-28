export class Typewriter {
  constructor({ delay, stand, waitReturnSound }) {
    this.h1 = document.querySelector('h1');
    this.titleText =
      this.h1.textContent === '' ? document.title : this.h1.textContent;
    this.textArray = this.titleText.split('');
    this.sound = {
      type: new Audio('sound/02.mp3'),
      return: new Audio('sound/return.mp3'),
    };
    this.screen = document.createElement('div');
    this.paragraph = document.createElement('p');
    this.subtitle = document.createElement('p');
    this.settings = { delay, stand, waitReturnSound };
    this._runAll();
  }
  _init() {
    this.screen.classList.add('screen');
    this.paragraph.classList.add('char');
    this.subtitle.classList.add('subtitle');
    this.screen.appendChild(this.paragraph);
    document.body.appendChild(this.screen);
    const { height } = this.screen.getBoundingClientRect();
    this.paragraph.style.fontSize = Math.floor(height * 0.6) + 'px';
    this.subtitle.style.fontSize = Math.floor(height / 5) + 'px';
    const putInside = () => {
      if (this.h1.textContent !== '') return this.h1.innerHTML;
      return document.title;
    };
    this.subtitle.innerHTML = putInside();
    this.sound.type.volume = 0.3;
  }
  _showChar(char) {
    return new Promise(resolve => {
      setTimeout(() => {
        this.paragraph.textContent = char;
        this.sound.type.currentTime = 0;
        this.sound.type.play();
        resolve('show char');
      }, this.settings.delay);
    });
  }
  async _showSingleCharacter() {
    for (const char of this.textArray) {
      await this._showChar(char);
    }
  }
  _removeParagraph() {
    return new Promise(resolve => {
      setTimeout(() => {
        this.screen.removeChild(this.paragraph);
        this.sound.return.play();
        resolve('remove paragraph');
      }, this.settings.delay);
    });
  }
  _showSubtitle() {
    return new Promise(resolve => {
      setTimeout(() => {
        this.screen.appendChild(this.subtitle);
        resolve('show subtitle');
      }, this.settings.waitReturnSound);
    });
  }
  _removeScreen() {
    setTimeout(() => {
      document.body.removeChild(this.screen);
    }, this.settings.stand);
  }
  async _runAll() {
    this._init();
    await this._showSingleCharacter();
    await this._removeParagraph();
    await this._showSubtitle();
    await this._removeScreen();
  }
}
