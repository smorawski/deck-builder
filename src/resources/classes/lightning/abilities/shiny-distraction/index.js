import image from './shiny-distraction.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'shinyDistraction',
  initiative: 8,
  image,
  level: LEVELS[4],
  top: {
    tags: [
      TAGS.ACTIONS.LOOT,
      TAGS.EFFECTS.SHIELD,
      TAGS.DURATION.ONE_ROUND,
    ],
  },
  bottom: {
    tags: [
      TAGS.INCREASE_ELEMENTS.FIRE,
      TAGS.DURATION.ONE_ROUND,
    ],
  },
};
