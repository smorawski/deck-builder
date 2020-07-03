import image from './regenerative-tissue.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'regenerativeTissue',
  initiative: 46,
  image,
  level: LEVELS[3],
  top: {
    tags: [
      TAGS.ACTIONS.HEAL,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    tags: [
      TAGS.ACTIONS.HEAL,
      TAGS.DURATION.PERMANENT,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
};
