import image from './gentlemans-anger.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'gentlemansAnger',
  initiative: 29,
  image,
  level: LEVELS[8],
  top: {
    attacks: ['5'],
    tags: [
      TAGS.EFFECTS.DISARM,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    attacks: ['3'],
    tags: [
      TAGS.OTHER.RANGED,
      TAGS.OTHER.XP,
    ],
  },
};
