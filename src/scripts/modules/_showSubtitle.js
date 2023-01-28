import { screen,subtitle } from "./_initialize";

export const showSubtitle = async () => {
  return new Promise(resolve => {
    setTimeout(() => {
      screen.appendChild(subtitle);
      resolve('subtitle');
    }, 1500);
  });
};
