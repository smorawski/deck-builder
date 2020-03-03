import image from './venom-strike.jpg';
import TAGS from '../../../../other/tags';

export default {
  name: 'venomStrike',
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
