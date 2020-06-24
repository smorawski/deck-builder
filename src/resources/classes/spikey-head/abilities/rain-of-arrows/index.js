import image from './rain-of-arrows.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'rainOfArrows',
  initiative: 33,
  image,
  level: LEVELS[1],
  top: {
    attacks: ['2'],
    tags: [
      TAGS.CLASSES.SPIKEY_HEAD,
      TAGS.DURATION.USES,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    tags: [
      TAGS.CLASSES.SPIKEY_HEAD,
      TAGS.DURATION.PERMANENT,
    ],
  },
};
