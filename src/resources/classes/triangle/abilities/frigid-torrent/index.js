import image from './frigid-torrent.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'frigidTorrent',
  initiative: 35,
  image,
  level: LEVELS[1],
  top: {
    attacks: ['3'],
    tags: [
      TAGS.USE_ELEMENTS.EARTH,
      TAGS.TARGETS.MULTIPLE,
      TAGS.EFFECTS.PIERCE,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    attacks: ['3'],
    tags: [
      TAGS.OTHER.RANGED,
      TAGS.ACTIONS.PULL,
      TAGS.TARGETS.AREA,
      TAGS.INCREASE_ELEMENTS.FROST,
      TAGS.INCREASE_ELEMENTS.AIR,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
};
