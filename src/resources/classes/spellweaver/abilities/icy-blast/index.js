import image from './icy-blast.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'iceBlast',
  initiative: 66,
  image,
  level: LEVELS[2],
  top: {
    attacks: ['2'],
    tags: [
      TAGS.OTHER.RANGED,
      TAGS.EFFECTS.MUDDLE,
      TAGS.TARGETS.AREA,
      TAGS.INCREASE_ELEMENTS.FROST,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    tags: [
      TAGS.ACTIONS.HEAL,
      TAGS.OTHER.RANGED,
      TAGS.OTHER.LOST,
    ],
  },
};
