import image from './mobilizing-measure.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'mobilizingMeasure',
  initiative: 6,
  image,
  level: LEVELS[5],
  top: {
    tags: [
      TAGS.OTHER.XP,
      TAGS.DURATION.PERMANENT,
      TAGS.CLASSES.MUSIC_NOTE,
    ],
  },
  bottom: {
    moves: ['6'],
    tags: [
      TAGS.OTHER.XP,
    ],
  },
};
