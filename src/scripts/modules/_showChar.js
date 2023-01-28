import { settings } from "./_settings";
import { paragraph ,typeSound} from './_initialize';

export const showChar = (char) => {
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
