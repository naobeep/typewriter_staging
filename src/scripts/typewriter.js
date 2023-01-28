import '../styles/typewriter.scss';
import { showSingleCharacter } from "./modules/_showSingleCharacter";
import { removeParagraph } from "./modules/_removeParagraph";
import { showSubtitle } from "./modules/_showSubtitle";
import { removeScreen } from "./modules/_removeScreen";

const typewriter = async () => {
  await showSingleCharacter();
  await removeParagraph();
  await showSubtitle();
  await removeScreen();
};

typewriter();
