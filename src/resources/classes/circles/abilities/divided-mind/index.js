import image from './divided-mind.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'dividedMind',
  initiative: 55,
  image,
  level: LEVELS[4],
  top: {
    tags: [
      TAGS.ACTIONS.CONTROL_SUMMON,
      TAGS.TARGETS.MULTIPLE,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    tags: [
      TAGS.ACTIONS.CONTROL_SUMMON,
      TAGS.TARGETS.MULTIPLE,
      TAGS.OTHER.XP,
    ],
  },
};
