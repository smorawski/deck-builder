import image from './simulacrum.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'simulacrum',
  initiative: 94,
  image,
  level: LEVELS[6],
  top: {
    attacks: ['2'],
    tags: [
      TAGS.OTHER.RANGED,
      TAGS.USE_ELEMENTS.ANY,
      TAGS.TARGETS.MULTIPLE,
      TAGS.EFFECTS.IMMOBILIZE,
      TAGS.EFFECTS.MUDDLE,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    tags: [
      TAGS.ACTIONS.SUMMON,
      TAGS.INCREASE_ELEMENTS.EARTH,
      TAGS.OTHER.XP,
      TAGS.DURATION.PERMANENT,
      TAGS.OTHER.LOST,
    ],
  },
};
