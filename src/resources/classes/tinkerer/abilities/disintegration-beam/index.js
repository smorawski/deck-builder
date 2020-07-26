import image from './disintegration-beam.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'disintegrationBeam',
  initiative: 36,
  image,
  level: LEVELS[5],
  top: {
    tags: [
      TAGS.ACTIONS.KILL_ENEMY,
      TAGS.TARGETS.AREA,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    moves: ['2'],
    tags: [
      TAGS.EFFECTS.DISARM,
      TAGS.TARGETS.ADJACENT_ENEMY,
    ],
  },
};
