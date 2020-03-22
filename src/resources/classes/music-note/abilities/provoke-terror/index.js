import image from './provoke-terror.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'provokeTerror',
  initiative: 60,
  image,
  level: LEVELS[6],
  top: {
    tags: [
      TAGS.EFFECTS.STUN,
      TAGS.OTHER.RANGED,
      TAGS.TARGETS.AREA,
    ],
  },
  bottom: {
    attacks: ['4'],
    tags: [
      TAGS.OTHER.RANGED,
      TAGS.ACTIONS.PUSH,
    ],
  },
};
