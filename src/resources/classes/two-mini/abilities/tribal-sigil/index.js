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
