import image from './research-the-cure.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'researchTheCure',
  initiative: 40,
  image,
  level: LEVELS[5],
  top: {
    attacks: ['4'],
    tags: [
      TAGS.TARGETS.ADJACENT_ALLY,
      TAGS.TARGETS.MULTIPLE,
    ],
  },
  bottom: {
    moves: [],
    tags: [
      TAGS.EFFECTS.SHIELD,
      TAGS.TARGETS.ADJACENT_ALLY,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
};
