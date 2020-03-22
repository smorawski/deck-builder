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
      TAGS.TARGETS.MULTIPLE,
      TAGS.ACTIONS.HEAL,
    ],
  },
  bottom: {
    attacks: ['3'],
    tags: [
      TAGS.CLASSES.LIGHTNING,
      TAGS.OTHER.RANGED,
      TAGS.EFFECTS.IMMOBILIZE,
    ],
  },
};
