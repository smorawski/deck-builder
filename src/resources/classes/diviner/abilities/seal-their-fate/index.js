import image from './seal-their-fate.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'sealTheirFate',
  initiative: 37,
  image,
  level: LEVELS[5],
  top: {
    tags: [
      TAGS.CLASSES.DIVINER,
      TAGS.EFFECTS.CURSE,
      TAGS.OTHER.XP,
      TAGS.DURATION.PERMANENT,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    moves: ['3'],
    attacks: ['2'],
    tags: [
      TAGS.EFFECTS.CURSE,
      TAGS.OTHER.RANGED,
    ],
  },
};
