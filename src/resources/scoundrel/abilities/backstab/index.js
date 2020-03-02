import image from './backstab.jpg';
import { TAGS } from '../../../../constants/card';

export default {
  name: 'backstab',
  initiative: 6,
  image,
  level: 1,
  top: {
    attacks: ['3/7'],
    tags: [
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    moves: ['6'],
  },
};
