import image from './hastened-step.png';
import { LEVELS } from '../../../../other';

export default {
  name: 'hastenedStep',
  initiative: 26,
  image,
  level: LEVELS[1],
  top: {
    attacks: ['2', '2'],
    moves: ['1'],
  },
  bottom: {
    moves: ['5'],
  },
};
