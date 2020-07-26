import image from './backstab.jpg';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'backstab',
  initiative: 6,
  image,
  level: LEVELS[1],
  top: {
    attacks: ['3'],
    tags: [
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
      TAGS.CLASSES.SCOUNDREL,
      TAGS.EFFECTS.INCREASE_ATTACK,
    ],
  },
  bottom: {
    moves: ['6'],
  },
};
