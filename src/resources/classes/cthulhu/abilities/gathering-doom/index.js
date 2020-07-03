import image from './gathering-doom.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'gatheringDoom',
  initiative: 76,
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
    tags: [
      TAGS.ACTIONS.LOOT,
      TAGS.INCREASE_ELEMENTS.AIR,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
};
