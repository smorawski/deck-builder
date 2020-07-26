import image from './reckless-offensive.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'recklessOffensive',
  initiative: 21,
  image,
  level: LEVELS[2],
  top: {
    attacks: ['4'],
    tags: [
      TAGS.CLASSES.LIGHTNING,
      TAGS.TARGETS.MULTIPLE,
    ],
  },
  bottom: {
    tags: [
      TAGS.EFFECTS.INCREASE_ATTACK,
      TAGS.EFFECTS.RETALIATE,
      TAGS.DURATION.PERMANENT,
      TAGS.OTHER.LOST,
    ],
  },
};
