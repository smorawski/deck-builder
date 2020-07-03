import image from './bonded-might.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'bondedMight',
  initiative: 61,
  image,
  level: LEVELS[1],
  top: {
    tags: [
      TAGS.ACTIONS.CONTROL_SUMMON,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    tags: [
      TAGS.ACTIONS.LOOT,
    ],
  },
};
