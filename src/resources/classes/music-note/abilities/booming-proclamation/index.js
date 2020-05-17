import image from './booming-proclamation.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'boomingProclamation',
  initiative: 65,
  image,
  level: LEVELS[7],
  top: {
    attacks: ['1'],
    tags: [
      TAGS.TARGETS.MULTIPLE,
      TAGS.OTHER.RANGED,
      TAGS.ACTIONS.PUSH,
    ],
  },
  bottom: {
    attack: ['3'],
    tags: [
      TAGS.OTHER.XP,
      TAGS.OTHER.RANGED,
      TAGS.OTHER.LOST,
    ],
  },
};
