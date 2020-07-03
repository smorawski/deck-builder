import image from './crashing-wave.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'crashingWave',
  initiative: 22,
  image,
  level: LEVELS[7],
  top: {
    moves: ['4'],
    attacks: ['3'],
    tags: [
      TAGS.TARGETS.MULTIPLE,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    tags: [
      TAGS.CLASSES.SPIKEY_HEAD,
      TAGS.EFFECTS.CURSE,
      TAGS.DURATION.PERMANENT,
    ],
  },
};
