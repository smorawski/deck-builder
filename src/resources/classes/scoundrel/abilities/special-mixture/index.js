import image from './special-mixture.jpg';
import TAGS from '../../../../other/tags';

export default {
  name: 'specialMixture',
  initiative: 33,
  image,
  level: '1',
  top: {
    tags: [
      TAGS.ACTIONS.HEAL,
    ],
  },
  bottom: {
    moves: ['3'],
    tags: [
      TAGS.EFFECTS.POISON,
    ],
  },
};
