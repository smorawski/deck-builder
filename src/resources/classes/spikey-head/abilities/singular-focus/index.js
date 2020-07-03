import image from './singular-focus.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'singularFocus',
  initiative: 28,
  image,
  level: LEVELS[4],
  top: {
    tags: [
      TAGS.ACTIONS.LOOT,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    tags: [
      TAGS.CLASSES.SPIKEY_HEAD,
    ],
  },
};
