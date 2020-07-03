import image from './frightening-curse.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'frighteningCurse',
  initiative: 37,
  image,
  level: LEVELS[1],
  top: {
    tags: [
      TAGS.CLASSES.SPIKEY_HEAD,
      TAGS.DURATION.USES,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    tags: [
      TAGS.CLASSES.SPIKEY_HEAD,
      TAGS.ACTIONS.CONTROL_ENEMY,
      TAGS.DURATION.PERMANENT,
    ],
  },
};
