import image from './trample.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'trample',
  initiative: 72,
  image,
  level: LEVELS[1],
  top: {
    attacks: ['3'],
    tags: [
      TAGS.EFFECTS.PIERCE,
    ],
  },
  bottom: {
    moves: ['4'],
    attacks: ['2'],
    tags: [
      TAGS.EFFECTS.JUMP,
      TAGS.TARGETS.MULTIPLE,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
};
