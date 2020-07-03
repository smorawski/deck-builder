import image from './planar-fissure.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'planarFissure',
  initiative: 75,
  image,
  level: LEVELS[9],
  top: {
    attacks: ['3'],
    tags: [
      TAGS.CLASSES.DIVINER,
      TAGS.OTHER.RANGED,
      TAGS.EFFECTS.MUDDLE,
    ],
  },
  bottom: {
    tags: [
      TAGS.ACTIONS.SUMMON,
      TAGS.OTHER.XP,
      TAGS.DURATION.PERMANENT,
      TAGS.OTHER.LOST,
    ],
  },
};
