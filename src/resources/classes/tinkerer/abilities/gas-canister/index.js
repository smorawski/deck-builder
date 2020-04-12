import image from './gas-canister.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'gasCanister',
  initiative: 71,
  image,
  level: LEVELS[6],
  top: {
    tags: [
      TAGS.ACTIONS.CREATE_TRAP,
      TAGS.EFFECTS.MUDDLE,
    ],
  },
  bottom: {
    tags: [
      TAGS.EFFECTS.RECOVER,
      TAGS.OTHER.RANGED,
      TAGS.DURATION.USES,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
};
