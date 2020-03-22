import image from './thiefs-knack.jpg';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'thiefsKnack',
  initiative: 23,
  image,
  level: LEVELS[1],
  top: {
    tags: [
      TAGS.OTHER.XP,
      TAGS.ACTIONS.DISARM_TRAP,
    ],
  },
  bottom: {
    attacks: ['3'],
    tags: [
      TAGS.OTHER.XP,
    ],
  },
};
