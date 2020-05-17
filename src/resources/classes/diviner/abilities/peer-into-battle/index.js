import image from './peer-into-battle.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'peerIntoBattle',
  initiative: 82,
  image,
  level: LEVELS[1],
  top: {
    tags: [
      TAGS.CLASSES.DIVINER,
      TAGS.USE_ELEMENTS.LIGHT,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    tags: [
      TAGS.ACTIONS.HEAL,
      TAGS.TARGETS.MULTIPLE,
      TAGS.EFFECTS.REGENERATE,
      TAGS.INCREASE_ELEMENTS.LIGHT,
    ],
  },
};
