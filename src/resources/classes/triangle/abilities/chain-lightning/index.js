import image from './chain-lightning.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'chainLightning',
  initiative: 41,
  image,
  level: LEVELS[3],
  top: {
    attacks: ['4'],
    tags: [
      TAGS.OTHER.RANGED,
      TAGS.TARGETS.MULTIPLE,
      TAGS.USE_ELEMENTS.LIGHT,
      TAGS.EFFECTS.PIERCE,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    tags: [
      TAGS.ACTIONS.HEAL,
      TAGS.OTHER.RANGED,
      TAGS.INCREASE_ELEMENTS.LIGHT,
    ],
  },
};
