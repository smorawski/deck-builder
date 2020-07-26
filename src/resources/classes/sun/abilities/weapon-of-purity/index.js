import image from './weapon-of-purity.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'weaponOfPurity',
  initiative: 73,
  image,
  level: LEVELS[7],
  top: {
    tags: [
      TAGS.USE_ELEMENTS.LIGHT,
      TAGS.EFFECTS.INCREASE_ATTACK,
      TAGS.OTHER.XP,
      TAGS.DURATION.PERMANENT,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    moves: ['3'],
    attacks: ['3'],
  },
};
