import image from './beacon-of-light.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'beaconOfLight',
  initiative: 36,
  image,
  level: LEVELS.X,
  top: {
    tags: [
      TAGS.ACTIONS.HEAL,
      TAGS.OTHER.RANGED,
      TAGS.TARGETS.MULTIPLE,
    ],
  },
  bottom: {
    tags: [
      TAGS.INCREASE_ELEMENTS.LIGHT,
      TAGS.DURATION.USES,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
};
