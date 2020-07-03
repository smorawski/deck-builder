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
  },
  bottom: {
    moves: [],
    tags: [
      TAGS.EFFECTS.SHIELD,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
};
