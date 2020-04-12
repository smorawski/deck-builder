import image from './tinkerers-tools.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'tinkerersTools',
  initiative: 26,
  image,
  level: LEVELS[3],
  top: {
    tags: [
      TAGS.ACTIONS.DISARM_TRAP,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    tags: [
      TAGS.ACTIONS.CREATE_TRAP,
      TAGS.EFFECTS.STUN,
    ],
  },
};
