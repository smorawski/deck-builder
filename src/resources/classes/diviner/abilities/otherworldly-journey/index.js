import image from './otherworldly-journey.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'otherworldlyJourney',
  initiative: 34,
  image,
  level: LEVELS[1],
  top: {
    tags: [
      TAGS.ACTIONS.CONTROL_ENEMY,
      TAGS.ACTIONS.TELEPORT,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    tags: [
      TAGS.ACTIONS.TELEPORT,
    ],
  },
};
