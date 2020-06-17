import image from './oozing-manifestation.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'oozingManifestation',
  initiative: 86,
  image,
  level: LEVELS[3],
  top: {
    tags: [
      TAGS.ACTIONS.SUMMON,
      TAGS.EFFECTS.MUDDLE,
      TAGS.EFFECTS.SHIELD,
      TAGS.OTHER.LOST,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    attacks: ['3'],
    tags: [
      TAGS.OTHER.RANGED,
      TAGS.EFFECTS.IMMOBILIZE,
      TAGS.USE_ELEMENTS.DARKNESS,
      TAGS.EFFECTS.CURSE,
      TAGS.OTHER.XP,
    ],
  },
};
