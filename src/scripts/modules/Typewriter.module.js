export class Typewriter {
  constructor({ delay, wait, alternativeCode }) {
    this.settings = { delay, wait, alternativeCode };
    this.h1 = document.querySelector('h1');
    this.titleText =
      this.h1.textContent === '' ? document.title : this.h1.textContent;
    this.alternativeText = this.settings.alternativeCode
      ?.replaceAll('<span>', '')
      .replaceAll('</span>', '')
      .split('');
    this.textArray = this.settings.alternativeCode
      ? this.alternativeText
      : this.titleText.split('');
    this.sound = {
      type: new Audio('sound/type.mp3'),
      return: new Audio('sound/return.mp3'),
    };
    this.screen = document.createElement('div');
    this.paragraph = document.createElement('p');
    this.subtitle = document.createElement('p');
    this._runAll();
  }
  _getSubtitleFontSize() {
    const standard = Math.floor((this.width * 0.7) / this.textArray.length);
    if (this.textArray.length < 10) standard + 'px';

    return standard * 1.7 + 'px';
  }
  _getInside() {
    if (this.settings.alternativeCode) return this.settings.alternativeCode;
    if (this.h1.textContent !== '') return this.h1.innerHTML;
    return document.title;
  }
  _init() {
    this.screen.classList.add('screen');
    this.paragraph.classList.add('char');
    this.subtitle.classList.add('subtitle');
    this.screen.appendChild(this.paragraph);
    document.body.appendChild(this.screen);
    const { height } = this.screen.getBoundingClientRect();
    this.width = this.screen.getBoundingClientRect().width;
    this.paragraph.style.fontSize = Math.floor(height * 0.6) + 'px';
    this.subtitle.style.fontSize = this._getSubtitleFontSize();
    this.subtitle.innerHTML = this._getInside();
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
      }, this.settings.wait);
    });
  }
  _removeScreen() {
    setTimeout(() => {
      document.body.removeChild(this.screen);
    }, this.settings.delay * this.textArray.length + 1000);
  }
  async _runAll() {
    this._init();
    await this._showSingleCharacter();
    await this._removeParagraph();
    await this._showSubtitle();
    await this._removeScreen();
  }
}
