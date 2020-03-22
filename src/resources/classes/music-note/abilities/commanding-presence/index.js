import image from './commanding-presence.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'commandingPresence',
  initiative: 59,
  image,
  level: LEVELS[8],
  top: {
    attacks: ['2'],
    tags: [
      TAGS.TARGETS.MULTIPLE,
    ],
  },
  bottom: {
    tags: [
      TAGS.OTHER.RANGED,
      TAGS.TARGETS.AREA,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
};
