import image from './flanking-strike.jpg';
import { TAGS } from '../../../../constants/card';

export default {
  name: 'flanking-strike',
  initiative: 4,
  image,
  level: 1,
  top: {
    attacks: ['3/5'],
    tags: [
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    moves: ['5'],
  },
};
