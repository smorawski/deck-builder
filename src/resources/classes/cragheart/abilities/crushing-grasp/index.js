import image from './crushing-grasp.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'crushingGrasp',
  initiative: 35,
  image,
  level: LEVELS[1],
  top: {
    attacks: ['3'],
    tags: [
      TAGS.EFFECTS.IMMOBILIZE,
      TAGS.INCREASE_ELEMENTS.EARTH,
    ],
  },
  bottom: {
    tags: [
      TAGS.ACTIONS.LOOT,
    ],
  },
};
