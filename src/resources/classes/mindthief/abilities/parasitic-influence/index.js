import image from './parasitic-influence.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'parasiticInfluence',
  initiative: 71,
  image,
  level: LEVELS[1],
  top: {
    attacks: ['1'],
    tags: [
      TAGS.ACTIONS.HEAL,
      TAGS.CLASSES.MINDTHIEF,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    tags: [
      TAGS.OTHER.RANGED,
      TAGS.ACTIONS.CONTROL_ENEMY,
    ],
  },
};
