import image from './stone-pummel.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'stonePummel',
  initiative: 32,
  image,
  level: LEVELS[5],
  top: {
    attacks: ['3'],
    tags: [
      TAGS.TARGETS.AREA,
      TAGS.EFFECTS.MUDDLE,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    tags: [
      TAGS.CLASSES.CRAGHEART,
      TAGS.EFFECTS.INCREASE_ATTACK,
      TAGS.DURATION.USES,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
};
