import image from './inspiring-anthem.png';
import { LEVELS } from '../../../../other';

export default {
  name: 'inspiringAnthem',
  initiative: 50,
  image,
  level: LEVELS[4],
  top: {
    moves: ['5'],
  },
  bottom: {
    attacks: ['5'],
  },
};
