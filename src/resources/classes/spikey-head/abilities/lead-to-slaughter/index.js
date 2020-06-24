import image from './lead-to-slaughter.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'leadToSlaughter',
  initiative: 40,
  image,
  level: LEVELS[9],
  top: {
    attacks: ['4'],
    tags: [
      TAGS.OTHER.RANGED,
      TAGS.ACTIONS.CONTROL_ENEMY,
    ],
  },
  bottom: {
    moves: ['3'],
    tags: [
      TAGS.CLASSES.SPIKEY_HEAD,
      TAGS.OTHER.RANGED,
    ],
  },
};
