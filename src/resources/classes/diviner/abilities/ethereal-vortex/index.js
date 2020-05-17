import image from './ethereal-vortex.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'etherealVortex',
  initiative: 59,
  image,
  level: LEVELS[7],
  top: {
    attacks: ['2'],
    tags: [
      TAGS.CLASSES.DIVINER,
      TAGS.TARGETS.MULTIPLE,
      TAGS.EFFECTS.PIERCE,
      TAGS.EFFECTS.CURSE,
    ],
  },
  bottom: {
    moves: ['3'],
    tags: [
      TAGS.CLASSES.DIVINER,
      TAGS.OTHER.XP,
    ],
  },
};
