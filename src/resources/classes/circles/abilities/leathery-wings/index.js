import image from './leathery-wings.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'leatheryWinds',
  initiative: 90,
  image,
  level: LEVELS.X,
  top: {
    tags: [
      TAGS.ACTIONS.SUMMON,
      TAGS.INCREASE_ELEMENTS.EARTH,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    tags: [
      TAGS.EFFECTS.STRENGTHEN,
      TAGS.TARGETS.MULTIPLE,
    ],
  },
};
