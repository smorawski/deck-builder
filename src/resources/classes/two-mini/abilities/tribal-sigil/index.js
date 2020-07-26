import image from './tribal-sigil.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'tribalSigil',
  initiative: 91,
  image,
  level: LEVELS[9],
  top: {
    tags: [
      TAGS.ACTIONS.SUMMON,
      TAGS.EFFECTS.INCREASE_ATTACK,
      TAGS.TARGETS.ADJACENT_ALLY,
      TAGS.TARGETS.MULTIPLE,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    tags: [
      TAGS.EFFECTS.RECOVER,
      TAGS.OTHER.LOST,
    ],
  },
};
