export const showChar = char => {
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
