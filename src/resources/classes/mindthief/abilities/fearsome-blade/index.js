import image from './fearsome-blade.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'fearsomeBlade',
  initiative: 27,
  image,
  level: LEVELS[1],
  top: {
    attacks: ['2'],
    tags: [
      TAGS.ACTIONS.PUSH,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    moves: ['4'],
    attacks: ['2'],
    tags: [
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
};
