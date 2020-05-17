import image from './chromatic-explosion.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'chromaticExplosion',
  initiative: 71,
  image,
  level: LEVELS[5],
  top: {
    attacks: ['3'],
    tags: [
      TAGS.OTHER.RANGED,
      TAGS.TARGETS.AREA,
      TAGS.INCREASE_ELEMENTS.AIR,
      TAGS.INCREASE_ELEMENTS.DARKNESS,
      TAGS.INCREASE_ELEMENTS.EARTH,
      TAGS.INCREASE_ELEMENTS.FIRE,
      TAGS.INCREASE_ELEMENTS.FROST,
      TAGS.INCREASE_ELEMENTS.LIGHT,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    moves: ['2'],
    tags: [
      TAGS.INCREASE_ELEMENTS.ANY,
    ],
  },
};
