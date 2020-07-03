import image from './horned-majesty.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'hornedMajesty',
  initiative: 80,
  image,
  level: LEVELS[9],
  top: {
    tags: [
      TAGS.ACTIONS.SUMMON,
      TAGS.EFFECTS.PIERCE,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
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
