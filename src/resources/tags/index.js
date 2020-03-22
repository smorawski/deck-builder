import {
  USE_ELEMENTS,
  INCREASE_ELEMENTS,
  ELEMENTS_IMAGES,
} from './elements';
import { ACTIONS, ACTIONS_IMAGES } from './actions';
import { EFFECTS, EFFECTS_IMAGES } from './effects';
import { OTHER, OTHER_IMAGES } from './other';
import { TARGETS, TARGETS_IMAGES } from './targets';
import { DURATION, DURATION_IMAGES } from './duration';
import { CLASSES, CLASSES_IMAGES } from './classes';

export default {
  ACTIONS,
  OTHER,
  EFFECTS,
  INCREASE_ELEMENTS,
  USE_ELEMENTS,
  TARGETS,
  DURATION,
  CLASSES,
};

export const TAGS_IMAGES = {
  ...ELEMENTS_IMAGES,
  ...ACTIONS_IMAGES,
  ...EFFECTS_IMAGES,
  ...OTHER_IMAGES,
  ...TARGETS_IMAGES,
  ...DURATION_IMAGES,
  ...CLASSES_IMAGES,
};
