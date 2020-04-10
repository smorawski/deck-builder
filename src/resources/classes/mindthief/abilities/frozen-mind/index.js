import image from './frozen-mind.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'frozenMind',
  initiative: 81,
  image,
  level: LEVELS[5],
  top: {
    attacks: ['2'],
    tags: [
      TAGS.CLASSES.MINDTHIEF,
      TAGS.USE_ELEMENTS.FROST,
      TAGS.EFFECTS.STUN,
      TAGS.OTHER.XP,
      TAGS.DURATION.PERMANENT,
    ],
  },
  bottom: {
    moves: ['2'],
    tags: [
      TAGS.OTHER.RANGED,
      TAGS.ACTIONS.CONTROL_ENEMY,
    ],
  },
};
