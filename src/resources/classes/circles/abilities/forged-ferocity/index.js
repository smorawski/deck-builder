import image from './forged-ferocity.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'forgedFerocity',
  initiative: 96,
  image,
  level: LEVELS[1],
  top: {
    tags: [
      TAGS.ACTIONS.SUMMON,
      TAGS.EFFECTS.RETALIATE,
      TAGS.EFFECTS.SHIELD,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    tags: [
      TAGS.EFFECTS.SHIELD,
      TAGS.TARGETS.MULTIPLE,
      TAGS.INCREASE_ELEMENTS.EARTH,
      TAGS.DURATION.ONE_ROUND,
    ],
  },
};
