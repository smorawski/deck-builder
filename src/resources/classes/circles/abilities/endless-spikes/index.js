import image from './endless-spikes.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'endlessSpikes',
  initiative: 97,
  image,
  level: LEVELS[6],
  top: {
    tags: [
      TAGS.ACTIONS.SUMMON,
      TAGS.EFFECTS.RETALIATE,
      TAGS.EFFECTS.SHIELD,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    tags: [
      TAGS.EFFECTS.RETALIATE,
      TAGS.TARGETS.MULTIPLE,
    ],
  },
};
