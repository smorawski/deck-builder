import image from './venom-shiv.jpg';
import TAGS from '../../../../other/tags';

export default {
  name: 'venomShiv',
  initiative: 60,
  image,
  level: '1',
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
