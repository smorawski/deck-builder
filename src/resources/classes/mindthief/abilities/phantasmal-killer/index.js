import image from './phantasmal-killer.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'phantasmalKiller',
  initiative: 67,
  image,
  level: LEVELS[9],
  top: {
    attacks: ['2'],
    tags: [
      TAGS.USE_ELEMENTS.DARKNESS,
      TAGS.ACTIONS.KILL_ENEMY,
      TAGS.CLASSES.MINDTHIEF,
      TAGS.OTHER.XP,
      TAGS.DURATION.PERMANENT,
    ],
  },
  bottom: {
    moves: ['2'],
    tags: [
      TAGS.ACTIONS.LOOT,
      TAGS.OTHER.XP,
      TAGS.EFFECTS.INVISIBLE,
      TAGS.INCREASE_ELEMENTS.DARKNESS,
    ],
  },
};
