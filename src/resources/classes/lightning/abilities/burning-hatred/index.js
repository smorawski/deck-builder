import image from './burning-hatred.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'burningHatred',
  initiative: 40,
  image,
  level: LEVELS[7],
  top: {
    attacks: ['3'],
    tags: [
      TAGS.TARGETS.MULTIPLE,
      TAGS.USE_ELEMENTS.FIRE,
    ],
  },
  bottom: {
    moves: ['3'],
    tags: [
      TAGS.EFFECTS.WOUND,
      TAGS.TARGETS.MULTIPLE,
    ],
  },
};
