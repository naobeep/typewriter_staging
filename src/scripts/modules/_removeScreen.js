import { settings } from "./_settings";
import { screen } from "./_initialize";

export const removeScreen = async () => {
  setTimeout(() => {
    document.body.removeChild(screen);
  }, settings.stand);
};
