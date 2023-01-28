import { screen, returnSound, paragraph } from './_initialize';
export const removeParagraph = async () => {
  return new Promise(resolve => {
    console.log('remove');
    setTimeout(() => {
      screen.removeChild(paragraph);
      returnSound.play();
      resolve('remove');
    }, 300);
  });
};
