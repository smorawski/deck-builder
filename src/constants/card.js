
// actions
const ACTIONS = {
  HEAL: 'heal',
  LOOT: 'loot',
  DISARM_TRAP: 'disarm_trap',
  PULL: 'pull',
};

// other
const OTHER = {
  XP: 'xp',
  LOST: 'lost',
};

// effects
const EFFECTS = {
  DISARM: 'disarm',
  POISON: 'poison',
  STUN: 'stun',
  IMMOBILIZE: 'immobilize',
  INVISIBLE: 'invisible',
  WOUND: 'wound',
};

// increase element
const INCREASE_ELEMENTS = {
  INCREASE_DARKNESS: 'increase_darkness',
  INCREASE_FIRE: 'increase_fire',
};

// use element
const USE_ELEMENTS = {
  USE_DARKNESS: 'use_darkness',
  USE_FIRE: 'use_fire',
};

// targets
const TARGETS = {
  AREA: 'area',
  MULTIPLE_TARGETS: 'multiple_targets',
};

// duration
const DURATION = {
  USES: 'uses',
  ONE_TURN: 'one_turn',
  PERMANENT: 'permanent',
};

export const TAGS = {
  ACTIONS,
  OTHER,
  EFFECTS,
  INCREASE_ELEMENTS,
  USE_ELEMENTS,
  TARGETS,
  DURATION,
};
