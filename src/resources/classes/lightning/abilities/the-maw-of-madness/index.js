import image from './the-maw-of-madness.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'theMawOfMadness',
  initiative: 10,
  image,
  level: LEVELS[9],
  top: {
    attacks: ['3'],
    tags: [
      TAGS.EFFECTS.MUDDLE,
      TAGS.TARGETS.ADJACENT_ENEMY,
      TAGS.TARGETS.MULTIPLE,
      TAGS.ACTIONS.HEAL,
    ],
  },
  bottom: {
    attacks: ['3'],
    tags: [
      TAGS.CLASSES.LIGHTNING,
      TAGS.EFFECTS.INCREASE_ATTACK,
      TAGS.OTHER.RANGED,
      TAGS.EFFECTS.IMMOBILIZE,
    ],
  },
};
