import image from './impaling-spear.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'impalingSpear',
  initiative: 48,
  image,
  level: LEVELS[1],
  top: {
    attacks: ['3'],
    tags: [
      TAGS.OTHER.XP,
      TAGS.TARGETS.AREA,
    ],
  },
  bottom: {
    moves: ['4'],
  },
};
