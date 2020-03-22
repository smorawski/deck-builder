import image from './nimble-knife.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'nimbleKnife',
  initiative: 27,
  image,
  level: LEVELS.X,
  top: {
    attacks: ['2'],
    tags: [
      TAGS.EFFECTS.CURSE,
      TAGS.EFFECTS.BLESS,
    ],
  },
  bottom: {
    moves: ['4'],
  },
};
