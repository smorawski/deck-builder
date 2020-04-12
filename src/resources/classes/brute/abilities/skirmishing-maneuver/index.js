import image from './skirmishing-maneuver.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'skirmishManeuver',
  initiative: 29,
  image,
  level: LEVELS[5],
  top: {
    attacks: ['2', '2'],
    moves: ['2'],
  },
  bottom: {
    attacks: ['3'],
    tags: [
      TAGS.OTHER.RANGED,
      TAGS.OTHER.XP,
    ],
  },
};
