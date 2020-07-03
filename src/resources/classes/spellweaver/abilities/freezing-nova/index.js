import image from './freezing-nova.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'freezingNova',
  initiative: 21,
  image,
  level: LEVELS[1],
  top: {
    attacks: ['2/3'],
    tags: [
      TAGS.EFFECTS.IMMOBILIZE,
      TAGS.TARGETS.MULTIPLE,
      TAGS.USE_ELEMENTS.FROST,
    ],
  },
  bottom: {
    tags: [
      TAGS.ACTIONS.HEAL,
      TAGS.OTHER.RANGED,
      TAGS.INCREASE_ELEMENTS.LIGHT,
      TAGS.OTHER.LOST,
    ],
  },
};
