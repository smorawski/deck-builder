import image from './sinister-opportunity.jpg';
import TAGS from '../../../../other/tags';

export default {
  name: 'sinisterOpportunity',
  initiative: 93,
  image,
  level: 'x',
  top: {
    attacks: ['3/11'],
    tags: [
      TAGS.OTHER.XP,
      TAGS.USE_ELEMENTS.USE_DARKNESS,
    ],
  },
  bottom: {
    moves: ['3'],
  },
};
