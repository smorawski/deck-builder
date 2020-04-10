import image from './wretched-creature.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'wretchedCreature',
  initiative: 84,
  image,
  level: LEVELS[2],
  top: {
    attacks: ['6'],
    tags: [
      TAGS.ACTIONS.SUMMMON,
      TAGS.OTHER.XP,
      TAGS.DURATION.PERMANENT,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    moves: ['3'],
    tags: [
      TAGS.USE_ELEMENTS.DARKNESS,
      TAGS.EFFECTS.CURSE,
    ],
  },
};
