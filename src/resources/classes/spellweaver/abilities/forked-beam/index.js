import image from './forked-beam.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'forkedBeam',
  initiative: 20,
  image,
  level: LEVELS[4],
  top: {
    attacks: ['2'],
    tags: [
      TAGS.OTHER.RANGED,
      TAGS.TARGETS.MULTIPLE,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    moves: ['4'],
  },
};
