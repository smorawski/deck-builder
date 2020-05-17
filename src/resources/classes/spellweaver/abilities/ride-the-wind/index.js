import image from './ride-the-wind.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'rideTheWind',
  initiative: 83,
  image,
  level: LEVELS[1],
  top: {
    tags: [
      TAGS.ACTIONS.LOOT,
    ],
  },
  bottom: {
    moves: ['8'],
    tags: [
      TAGS.EFFECTS.JUMP,
      TAGS.INCREASE_ELEMENTS.AIR,
      TAGS.OTHER.LOST,
    ],
  },
};
