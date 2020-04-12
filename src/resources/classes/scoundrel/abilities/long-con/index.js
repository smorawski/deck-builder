import image from './long-con.jpg';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'longCon',
  initiative: 2,
  image,
  level: LEVELS[9],
  top: {
    attacks: [4],
    tags: [
      TAGS.EFFECTS.DISARM,
    ],
  },
  bottom: {
    tags: [
      TAGS.ACTIONS.CONTROL_ENEMY,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
};
