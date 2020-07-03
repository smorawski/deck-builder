import image from './wild-command.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'wildCommand',
  initiative: 46,
  image,
  level: LEVELS[5],
  top: {
    tags: [
      TAGS.ACTIONS.CONTROL_SUMMON,
    ],
  },
  bottom: {
    moves: ['3'],
    attacks: ['2'],
    tags: [
      TAGS.OTHER.RANGED,
      TAGS.CLASSES.SPIKEY_HEAD,
    ],
  },
};
