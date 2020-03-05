import image from './thiefs-knack.jpg';
import TAGS from '../../../../other/tags';

export default {
  name: 'thiefsKnack',
  initiative: 23,
  image,
  level: '1',
  top: {
    tags: [
      TAGS.OTHER.XP,
      TAGS.ACTIONS.DISARM_TRAP,
    ],
  },
  bottom: {
    attacks: ['3'],
    tags: [
      TAGS.OTHER.XP,
    ],
  },
};
