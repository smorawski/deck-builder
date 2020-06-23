import image from './shaping-the-ether.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'shapingTheEther',
  initiative: 54,
  image,
  level: LEVELS[1],
  top: {
    attacks: ['1'],
    tags: [
      TAGS.OTHER.RANGED,
      TAGS.OTHER.XP,
      TAGS.USE_ELEMENTS.FIRE,
      TAGS.USE_ELEMENTS.AIR,
      TAGS.ACTIONS.PUSH,
      TAGS.USE_ELEMENTS.FROST,
      TAGS.EFFECTS.STUN,
      TAGS.USE_ELEMENTS.EARTH,
      TAGS.TARGETS.MULTIPLE,
    ],
  },
  bottom: {
    tags: [
      TAGS.INCREASE_ELEMENTS.ANY,
      TAGS.DURATION.PERMANENT,
      TAGS.OTHER.LOST,
    ],
  },
};
