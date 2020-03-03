import image from './flanking-strike.jpg';
import TAGS from '../../../../other/tags';

export default {
  name: 'flankingStrike',
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
