import image from './backup-ammunition.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'backupAmmunition',
  initiative: 77,
  image,
  level: LEVELS[1],
  top: {
    tags: [
      TAGS.DURATION.USES,
      TAGS.TARGETS.MULTIPLE,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    moves: ['3'],
  },
};
