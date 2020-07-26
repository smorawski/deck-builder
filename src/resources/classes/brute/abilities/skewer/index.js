import image from './skewer.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'skewer',
  initiative: 35,
  image,
  level: LEVELS.X,
  top: {
    attacks: ['3'],
    tags: [
      TAGS.TARGETS.AREA,
      TAGS.USE_ELEMENTS.AIR,
      TAGS.EFFECTS.PIERCE,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    moves: ['6'],
    tags: [
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
};
