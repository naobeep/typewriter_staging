export class Typewriter {
  constructor({ delay, wait, stand, alternativeCode }) {
    this.settings = { delay, wait, stand, alternativeCode };
    this.h1 = document.querySelector('h1');
    this.titleText =
      this.h1.textContent === '' ? document.title : this.h1.textContent;
    this.alternativeText;
    this.textArray;
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
    const { width, height } = this.screen.getBoundingClientRect();
    const standard = Math.floor((width * 0.7) / this.textArray.length);
    const mag = Math.ceil(this.textArray.length / 10);
    const fontSize = Math.floor(standard * mag * 0.9);
    if (fontSize > height * 0.7) return Math.floor(height * 0.7) + 'px';
    return fontSize + 'px';
  }
  _getInside() {
    if (this.settings.alternativeCode) return this.settings.alternativeCode;
    if (this.h1.textContent !== '') return this.h1.innerHTML;
    return document.title;
  }
  _init() {
    this.alternativeText = this.settings.alternativeCode
      ?.replaceAll('<span>', '')
      .replaceAll('</span>', '')
      .split('');
    this.textArray = this.settings.alternativeCode
      ? this.alternativeText
      : this.titleText.split('');
    this.screen.classList.add('screen');
    this.paragraph.classList.add('character');
    this.subtitle.classList.add('subtitle');
    this.screen.appendChild(this.paragraph);
    document.body.appendChild(this.screen);
    this.subtitle.style.fontSize = this._getSubtitleFontSize();
    this.subtitle.innerHTML = this._getInside();
    this.sound.type.volume = 0.3;
  }
  _showChar(char) {
    return new Promise(resolve => {
      this.sound.type.currentTime = 0;
      this.sound.type.play();
      setTimeout(() => {
        this.paragraph.textContent = char;
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
    }, this.settings.delay * this.textArray.length + this.settings.stand);
  }
  async _runAll() {
    this._init();
    await this._showSingleCharacter();
    await this._removeParagraph();
    await this._showSubtitle();
    await this._removeScreen();
  }
}
