import image from './smoke-bomb.jpg';
import TAGS from '../../../../other/tags';

export default {
  name: 'smokeBomb',
  initiative: 12,
  image,
  level: '1',
  top: {
    tags: [
      TAGS.EFFECTS.INVISIBLE,
      TAGS.OTHER.XP,
      TAGS.DURATION.USES,
      TAGS.INCREASE_ELEMENTS.INCREASE_DARKNESS,
    ],
  },
  bottom: {
    tags: [
      TAGS.ACTIONS.PULL,
      TAGS.OTHER.RANGED,
    ],
  },
};
