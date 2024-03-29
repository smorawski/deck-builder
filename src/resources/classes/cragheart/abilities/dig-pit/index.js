import image from './dig-pit.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'digPit',
  initiative: 78,
  image,
  level: LEVELS[6],
  top: {
    tags: [
      TAGS.ACTIONS.CREATE_TRAP,
      TAGS.EFFECTS.MUDDLE,
      TAGS.TARGETS.ADJACENT_ENEMY,
    ],
  },
  bottom: {
    moves: ['2'],
    tags: [
      TAGS.EFFECTS.INVISIBLE,
    ],
  },
};
