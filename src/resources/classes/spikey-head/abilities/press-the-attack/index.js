import image from './press-the-attack.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'pressTheAttack',
  initiative: 10,
  image,
  level: LEVELS[3],
  top: {
    attacks: ['2'],
    tags: [
      TAGS.OTHER.RANGED,
      TAGS.CLASSES.SPIKEY_HEAD,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    tags: [
      TAGS.EFFECTS.RETALIATE,
      TAGS.OTHER.RANGED,
      TAGS.DURATION.ONE_ROUND,
    ],
  },
};
