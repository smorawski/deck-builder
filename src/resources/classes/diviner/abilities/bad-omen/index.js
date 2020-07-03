import image from './bad-omen.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'badOmen',
  initiative: 66,
  image,
  level: LEVELS.X,
  top: {
    tags: [
      TAGS.EFFECTS.CURSE,
      TAGS.DURATION.USES,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    tags: [
      TAGS.CLASSES.DIVINER,
      TAGS.ACTIONS.TELEPORT,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
};
