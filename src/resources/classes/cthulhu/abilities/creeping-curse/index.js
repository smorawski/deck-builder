import image from './creeping-curse.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'creepingCurse',
  initiative: 72,
  image,
  level: LEVELS[1],
  top: {
    attacks: ['3'],
    tags: [
      TAGS.EFFECTS.CURSE,
      TAGS.OTHER.RANGED,
    ],
  },
  bottom: {
    moves: ['2'],
    tags: [
      TAGS.EFFECTS.CURSE,
      TAGS.TARGETS.ADJACENT_ENEMY,
    ],
  },
};
