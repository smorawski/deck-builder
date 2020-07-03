import image from './blood-transfusion.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'bloodTransfusion',
  initiative: 52,
  image,
  level: LEVELS[4],
  top: {
    tags: [
      TAGS.ACTIONS.HEAL,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    attacks: ['3'],
    tags: [
      TAGS.EFFECTS.HEAL,
      TAGS.TARGETS.MULTIPLE,
    ],
  },
};
