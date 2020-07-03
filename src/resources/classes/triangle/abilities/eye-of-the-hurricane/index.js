import image from './eye-of-the-hurricane.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'eyeOfTheHurricane',
  initiative: 29,
  image,
  level: LEVELS[6],
  top: {
    attacks: ['2'],
    tags: [
      TAGS.ACTIONS.HEAL,
      TAGS.OTHER.RANGED,
      TAGS.TARGETS.MULTIPLE,
      TAGS.INCREASE_ELEMENTS.FROST,
      TAGS.INCREASE_ELEMENTS.AIR,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    moves: ['3'],
    tags: [
      TAGS.EFFECTS.JUMP,
      TAGS.OTHER.XP,
    ],
  },
};
