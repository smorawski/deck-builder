import image from './throw-voice.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'throwVoice',
  initiative: 44,
  image,
  level: LEVELS[1],
  top: {
    tags: [
      TAGS.EFFECTS.DISARM,
      TAGS.OTHER.RANGED,
      TAGS.TARGETS.AREA,
    ],
  },
  bottom: {
    tags: [
      TAGS.OTHER.RANGED,
      TAGS.TARGETS.AREA,
      TAGS.OTHER.XP,
    ],
  },
};
