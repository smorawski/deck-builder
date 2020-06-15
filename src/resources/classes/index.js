import brute from './brute';
import cragheart from './cragheart';
import cthulhu from './cthulhu';
import diviner from './diviner';
import mindthief from './mindthief';
import scoundrel from './scoundrel';
import spellweaver from './spellweaver';
import tinkerer from './tinkerer';
import musicNote from './music-note';
import lightning from './lightning';
import { CLASSES } from '../tags/classes';

export const CLASSES_OBJECT = {
  [CLASSES.BRUTE]: brute,
  [CLASSES.CRAGHEART]: cragheart,
  [CLASSES.CTHULHU]: cthulhu,
  [CLASSES.DIVINER]: diviner,
  [CLASSES.MINDTHIEF]: mindthief,
  [CLASSES.SCOUNDREL]: scoundrel,
  [CLASSES.SPELLWEAVER]: spellweaver,
  [CLASSES.TINKERER]: tinkerer,
  [CLASSES.MUSIC_NOTE]: musicNote,
  [CLASSES.LIGHTNING]: lightning,
};
