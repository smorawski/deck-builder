import image from './grasping-the-void.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'graspingTheVoid',
  initiative: 62,
  image,
  level: LEVELS[2],
  top: {
    attacks: [2],
    tags: [
      TAGS.OTHER.RANGED,
      TAGS.EFFECTS.CURSE,
      TAGS.USE_ELEMENTS.DARKNESS,
      TAGS.EFFECTS.STUN,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    attacks: ['2'],
    tags: [
      TAGS.OTHER.RANGED,
      TAGS.ACTIONS.HEAL,
    ],
  },
};
