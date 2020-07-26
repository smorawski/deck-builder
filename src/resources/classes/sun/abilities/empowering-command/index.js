import image from './empowering-command.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'empoweringCommand',
  initiative: 32,
  image,
  level: LEVELS[1],
  top: {
    tags: [
      TAGS.EFFECTS.RECOVER,
      TAGS.TARGETS.ADJACENT_ALLY,
      TAGS.USE_ELEMENTS.LIGHT,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    attacks: ['4'],
    tags: [
      TAGS.TARGETS.ADJACENT_ALLY,
    ],
  },
};
