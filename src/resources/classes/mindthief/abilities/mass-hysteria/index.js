import image from './mass-hysteria.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'massHysteria',
  initiative: 12,
  image,
  level: LEVELS[5],
  top: {
    attacks: ['1'],
    tags: [
      TAGS.OTHER.RANGED,
      TAGS.TARGETS.MULTIPLE,
      TAGS.EFFECTS.MUDDLE,
      TAGS.INCREASE_ELEMENTS.FROST,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    tags: [
      TAGS.CLASSES.MINDTHIEF,
      TAGS.DURATION.PERMANENT,
      TAGS.OTHER.LOST,
    ],
  },
};
