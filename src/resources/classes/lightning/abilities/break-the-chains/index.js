import image from './break-the-chains.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'breakTheChains',
  initiative: 53,
  image,
  level: LEVELS[2],
  top: {
    attacks: ['2'],
    tags: [
      TAGS.OTHER.RANGED,
      TAGS.TARGETS.MULTIPLE,
      TAGS.ACTIONS.PULL,
    ],
  },
  bottom: {
    moves: ['3'],
    tags: [
      TAGS.CLASSES.LIGHTNING,
      TAGS.EFFECTS.INCREASE_MOVE,
      TAGS.USE_ELEMENTS.FIRE,
      TAGS.OTHER.XP,
    ],
  },
};
