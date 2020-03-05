import image from './tricksters-reversal.jpg';
import TAGS from '../../../../other/tags';

export default {
  name: 'trickstersReversal',
  initiative: 9,
  image,
  level: 'x',
  top: {
    attacks: ['2'],
    tags: [
      TAGS.OTHER.LOST,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    tags: [
      TAGS.DURATION.ONE_TURN,
    ],
  },
};
