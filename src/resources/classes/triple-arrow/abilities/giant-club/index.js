import image from './giant-club.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'giantClub',
  initiative: 61,
  image,
  level: LEVELS[4],
  top: {
    attacks: ['5'],
    tags: [
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    attacks: ['3'],
    tags: [
      TAGS.EFFECTS.MUDDLE,
    ],
  },
};
