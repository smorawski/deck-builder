import image from './stone-sigil.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'stoneSigil',
  initiative: 95,
  image,
  level: LEVELS[5],
  top: {
    tags: [
      TAGS.ACTIONS.SUMMON,
      TAGS.EFFECTS.SHIELD,
      TAGS.INCREASE_ELEMENTS.EARTH,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    moves: ['5'],
    tags: [
      TAGS.CLASSES.TWO_MINI,
    ],
  },
};
