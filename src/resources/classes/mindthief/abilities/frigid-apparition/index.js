import image from './frigid-apparition.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'frigidApparition',
  initiative: 29,
  image,
  level: LEVELS.X,
  top: {
    attacks: ['3'],
    tags: [
      TAGS.USE_ELEMENTS.FROST,
      TAGS.EFFECTS.STUN,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    moves: ['4'],
    tags: [
      TAGS.EFFECTS.STUN,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
};
