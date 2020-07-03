import image from './withering-claw.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'witheringClaw',
  initiative: 77,
  image,
  level: LEVELS.X,
  top: {
    attacks: ['1'],
    tags: [
      TAGS.CLASSES.MINDTHIEF,
      TAGS.EFFECTS.POISON,
      TAGS.EFFECTS.MUDDLE,
      TAGS.OTHER.XP,
      TAGS.DURATION.PERMANENT,
    ],
  },
  bottom: {
    moves: ['3'],
    tags: [
      TAGS.EFFECTS.IMMOBILIZE,
    ],
  },
};
