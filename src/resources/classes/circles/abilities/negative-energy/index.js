import image from './negative-energy.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'negativeEnergy',
  initiative: 95,
  image,
  level: LEVELS[7],
  top: {
    tags: [
      TAGS.ACTIONS.SUMMON,
      TAGS.EFFECTS.CURSE,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    tags: [
      TAGS.EFFECTS.CURSE,
      TAGS.TARGETS.MULTIPLE,
      TAGS.INCREASE_ELEMENTS.DARKNESS,
    ],
  },
};
