import image from './perverse-edge.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'perverseEdge',
  initiative: 8,
  image,
  level: LEVELS[1],
  top: {
    attacks: ['3'],
    tags: [
      TAGS.CLASSES.MINDTHIEF,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    attacks: ['1'],
    tags: [
      TAGS.OTHER.RANGED,
      TAGS.EFFECTS.STUN,
      TAGS.INCREASE_ELEMENTS.FROST,
      TAGS.OTHER.XP,
    ],
  },
};
