import image from './stone-fists.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'stoneFists',
  initiative: 62,
  image,
  level: LEVELS[7],
  top: {
    attacks: ['6'],
    tags: [
      TAGS.ACTIONS.PUSH,
      TAGS.EFFECTS.IMMOBILIZE,
      TAGS.USE_ELEMENTS.EARTH,
      TAGS.TARGETS.MULTIPLE,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    moves: ['3/4'],
    tags: [
      TAGS.EFFECTS.SHIELD,
      TAGS.USE_ELEMENTS.EARTH,
      TAGS.DURATION.ONE_ROUND,
    ],
  },
};
