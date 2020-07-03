import image from './obsidian-shards.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'obsidianShards',
  initiative: 36,
  image,
  level: LEVELS[5],
  top: {
    attacks: ['2'],
    tags: [
      TAGS.OTHER.RANGED,
      TAGS.TARGETS.MULTIPLE,
      TAGS.USE_ELEMENTS.FIRE,
      TAGS.USE_ELEMENTS.EARTH,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    tags: [
      TAGS.EFFECTS.SHIELD,
      TAGS.INCREASE_ELEMENTS.FROST,
      TAGS.INCREASE_ELEMENTS.DARKNESS,
      TAGS.DURATION.ONE_ROUND,
    ],
  },
};
