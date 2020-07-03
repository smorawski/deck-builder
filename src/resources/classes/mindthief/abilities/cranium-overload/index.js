import image from './cranium-overload.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'craniumOverload',
  initiative: 5,
  image,
  level: LEVELS[4],
  top: {
    attacks: ['2'],
    tags: [
      TAGS.ACTIONS.KILL_ENEMY,
      TAGS.TARGETS.MULTIPLE,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    moves: ['5'],
  },
};
