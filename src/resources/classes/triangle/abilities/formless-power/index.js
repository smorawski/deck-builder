import image from './formless-power.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'formlessPower',
  initiative: 45,
  image,
  level: LEVELS[1],
  top: {
    attacks: ['2'],
    tags: [
      TAGS.OTHER.RANGED,
      TAGS.USE_ELEMENTS.ANY,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    tags: [
      TAGS.USE_ELEMENTS.ANY,
      TAGS.OTHER.XP,
      TAGS.DURATION.PERMANENT,
      TAGS.OTHER.LOST,
    ],
  },
};
