import increaseAir from './air.svg';
import increaseAny from './any.svg';
import increaseDarkness from './darkness.svg';
import increaseEarth from './earth.svg';
import increaseFire from './fire.svg';
import increaseFrost from './frost.svg';
import increaseLight from './light.svg';

import useAny from './use-any.svg';
import useAir from './use-air.svg';
import useDarkness from './use-darkness.svg';
import useEarth from './use-earth.svg';
import useFire from './use-fire.svg';
import useFrost from './use-frost.svg';
import useLight from './use-light.svg';


// increase element
export const INCREASE_ELEMENTS = {
  AIR: 'increase_air',
  ANY: 'increase_any',
  DARKNESS: 'increase_darkness',
  EARTH: 'increase_earth',
  FIRE: 'increase_fire',
  FROST: 'increase_frost',
  LIGHT: 'increase_light',
};

// use element
export const USE_ELEMENTS = {
  AIR: 'use_air',
  ANY: 'use_any',
  DARKNESS: 'use_darkness',
  EARTH: 'use_earth',
  FIRE: 'use_fire',
  FROST: 'use_frost',
  LIGHT: 'use_light',
};

export const ELEMENTS_IMAGES = {
  [INCREASE_ELEMENTS.AIR]: increaseAir,
  [INCREASE_ELEMENTS.ANY]: increaseAny,
  [INCREASE_ELEMENTS.DARKNESS]: increaseDarkness,
  [INCREASE_ELEMENTS.EARTH]: increaseEarth,
  [INCREASE_ELEMENTS.FIRE]: increaseFire,
  [INCREASE_ELEMENTS.FROST]: increaseFrost,
  [INCREASE_ELEMENTS.LIGHT]: increaseLight,

  [USE_ELEMENTS.AIR]: useAir,
  [USE_ELEMENTS.ANY]: useAny,
  [USE_ELEMENTS.DARKNESS]: useDarkness,
  [USE_ELEMENTS.EARTH]: useEarth,
  [USE_ELEMENTS.FIRE]: useFire,
  [USE_ELEMENTS.FROST]: useFrost,
  [USE_ELEMENTS.LIGHT]: useLight,
};
