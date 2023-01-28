import { txtArr } from './_initialize';
import { showChar } from './_showChar';
export const showSingleCharacter = async () => {
  for (const char of txtArr) {
    await showChar(char);
  }
};
