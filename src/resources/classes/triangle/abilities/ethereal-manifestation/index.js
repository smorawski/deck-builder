import image from './ethereal-manifestation.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'etherealManifestation',
  initiative: 98,
  image,
  level: LEVELS[9],
  top: {
    tags: [
      TAGS.ACTIONS.SUMMON,
      TAGS.INCREASE_ELEMENTS.ANY,
      TAGS.OTHER.XP,
      TAGS.DURATION.PERMANENT,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    attacks: ['3'],
    moves: ['3'],
    tags: [
      TAGS.USE_ELEMENTS.FIRE,
      TAGS.USE_ELEMENTS.AIR,
      TAGS.USE_ELEMENTS.FROST,
      TAGS.ACTIONS.LOOT,
      TAGS.USE_ELEMENTS.EARTH,
      TAGS.ACTIONS.HEAL,
      TAGS.OTHER.RANGED,
    ],
  },
};
