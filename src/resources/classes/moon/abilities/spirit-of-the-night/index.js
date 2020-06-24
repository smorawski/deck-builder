import image from './spirit-of-the-night.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'spiritOfTheNight',
  initiative: 84,
  image,
  level: LEVELS[1],
  top: {
    attacks: ['3'],
    tags: [
      TAGS.USE_ELEMENTS.DARKNESS,
      TAGS.ACTIONS.KILL_ENEMY,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    moves: ['6'],
    tags: [
      TAGS.INCREASE_ELEMENTS.DARKNESS,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
};
