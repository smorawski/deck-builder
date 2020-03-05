import image from './throwing-knieves.jpg';
import TAGS from '../../../../other/tags';

export default {
  name: 'throwingKnieves',
  initiative: 10,
  image,
  level: '1',
  top: {
    attacks: ['2'],
    tags: [
      TAGS.OTHER.XP,
      TAGS.OTHER.RANGED,
      TAGS.TARGETS.MULTIPLE_TARGETS,
    ],
  },
  bottom: {
    tags: [
      TAGS.ACTIONS.LOOT,
      TAGS.OTHER.LOST,
    ],
  },
};
