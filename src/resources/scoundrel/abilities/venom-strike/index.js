import image from './venom-strike.jpg';
import { TAGS } from '../../../../constants/card';

export default {
  name: 'venom-strike',
  initiative: 60,
  image,
  level: 1,
  top: {
    attacks: ['3'],
    tags: [
      TAGS.OTHER.XP,
      TAGS.EFFECTS.POISON,
    ],
  },
  bottom: {
    moves: ['5'],
  },
};
