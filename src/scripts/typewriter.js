import '../styles/typewriter.scss';

import { mergeSettings } from './modules/_getSettings';
import { Typewriter } from './modules/Typewriter.module';

const settings = mergeSettings();
new Typewriter(settings);
