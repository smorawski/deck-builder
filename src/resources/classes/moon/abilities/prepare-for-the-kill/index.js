import image from './prepare-for-the-kill.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'prepareForTheKill',
  initiative: 7,
  image,
  level: LEVELS[2],
  top: {
    attacks: ['2'],
    tags: [
      TAGS.INCREASE_ELEMENTS.DARKNESS,
    ],
  },
  bottom: {
    moves: ['2'],
    tags: [
      TAGS.INCREASE_ELEMENTS.DARKNESS,
    ],
  },
};
