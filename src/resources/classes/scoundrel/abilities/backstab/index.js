import image from './backstab.jpg';
import TAGS from '../../../../other/tags';

export default {
  name: 'backstab',
  initiative: 6,
  image,
  level: '1',
  top: {
    attacks: ['3/7'],
    tags: [
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    moves: ['6'],
  },
};
