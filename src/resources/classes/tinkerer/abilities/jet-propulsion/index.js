import image from './jet-propulsion.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'jetPropulsion',
  initiative: 38,
  image,
  level: LEVELS[8],
  top: {
    tags: [
      TAGS.OTHER.RANGED,
      TAGS.ACTIONS.CONTROL_SUMMON,
    ],
  },
  bottom: {
    moves: ['8'],
    tags: [
      TAGS.EFFECTS.JUMP,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
};
