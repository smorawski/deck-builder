import image from './unstoppable-beast.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'unstoppableBeast',
  initiative: 32,
  image,
  level: LEVELS[3],
  top: {
    attacks: ['3'],
    tags: [
      TAGS.CLASSES.TWO_MINI,
      TAGS.TARGETS.AREA,
      TAGS.USE_ELEMENTS.EARTH,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    moves: ['5'],
  },
};
