import image from './sinister-opportunity.jpg';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'sinisterOpportunity',
  initiative: 93,
  image,
  level: LEVELS.X,
  top: {
    attacks: ['3/11'],
    tags: [
      TAGS.OTHER.XP,
      TAGS.USE_ELEMENTS.DARKNESS,
      TAGS.CLASSES.SCOUNDREL,
    ],
  },
  bottom: {
    moves: ['3'],
    tags: [
      TAGS.ACTIONS.CONTROL_ENEMY,
    ],
  },
};
